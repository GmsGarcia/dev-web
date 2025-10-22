import { Product } from "./Product.js";
import { produtos as productsList } from "./produtos.js";

var products;
var cart;
var price;

document.addEventListener("DOMContentLoaded", function() {
  products = document.getElementById("produtos");
  cart = document.getElementById("cesto");
  price = document.getElementById("price");

  loadProducts(productsList);
  loadCart();
});

document.addEventListener("onItemAdd", (event) => {
  const item = event.detail;
  const items = JSON.parse(localStorage.getItem("produtos-selecionados")) || [];

  items.push(item);
  localStorage.setItem("produtos-selecionados", JSON.stringify(items));
  console.log("ahhh");
  loadCart();
});

document.addEventListener("onItemRemove", (event) => {
  const item = event.detail;
  var items = JSON.parse(localStorage.getItem("produtos-selecionados")) || [];

  const index = items.findIndex((i) => i.id === item.id);
  items = [...items.slice(0, index), ...items.slice(index + 1)];

  localStorage.setItem("produtos-selecionados", JSON.stringify(items));

  loadCart();
});

function loadProducts(list) {
  list.forEach((product) => {
    var p = createProduct(product);
    products.appendChild(p.shop());
  });
}

function createProduct(product) {
  return new Product(
    product["id"],
    product["title"],
    product["description"],
    product["price"],
    product["image"],
  );
}

function loadCart() {
  cart.innerHTML = "";

  const items = JSON.parse(localStorage.getItem("produtos-selecionados")) || [];

  if (items.length === 0) {
    cart.style.display = "none";
    cart.parentElement.querySelector("#cesto-label").style.display = "none";
    price.style.display = "none";
    return;
  }

  cart.style.display = "flex";
  cart.parentElement.querySelector("#cesto-label").style.display = "block";
  price.style.display = "block";

  var total = 0;
  items.forEach((product) => {
    var p = createProduct(product);
    total += p.price;
    cart.appendChild(p.cart());
  });

  price.textContent = "Custo total: " + total + "€\n";
}
