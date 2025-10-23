import { Product } from "./Product.js";

var productsContainer;
var cartContainer;
var checkoutContainer;

var priceLabel;

var filterBy;
var orderBy;
var searchBy;

var deisiStudentInput;
var couponInput;
var purchaseButton;

var products;
var categories;

const base = "https://deisishop.pythonanywhere.com";

// main event : "entrypoint"
document.addEventListener("DOMContentLoaded", function() {
  productsContainer = document.getElementById("produtos");
  cartContainer = document.getElementById("cesto");
  checkoutContainer = document.getElementById("checkout");

  priceLabel = document.getElementById("price");

  filterBy = document.getElementById("filterBy");
  orderBy = document.getElementById("orderBy");
  searchBy = document.getElementById("searchBy");

  deisiStudentInput = document.getElementById("deisiStudent");
  couponInput = document.getElementById("coupon");
  purchaseButton = document.getElementById("purchase");

  fetch(base + "/categories")
    .then((res) => res.json())
    .then((res) => {
      categories = res;
      setupFilters();
    });

  fetch(base + "/products")
    .then((res) => res.json())
    .then((res) => {
      products = res;
      loadProducts(products);
      loadCart();
    });

  // filters events
  filterBy.addEventListener("change", () => {
    loadProducts(products);
  });

  orderBy.addEventListener("change", () => {
    loadProducts(products);
  });

  searchBy.addEventListener("input", () => {
    loadProducts(products);
  });

  purchaseButton.addEventListener("click", () => {
    purchaseProducts();
  });
});

// custom events
document.addEventListener("onItemAdd", (event) => {
  const item = event.detail;
  const items = JSON.parse(localStorage.getItem("produtos-selecionados")) || [];

  items.push(item);
  localStorage.setItem("produtos-selecionados", JSON.stringify(items));
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
  productsContainer.innerHTML = "";

  // filter by category
  if (filterBy.value != "all") {
    list = list.filter((p) => p.category.toLowerCase() == filterBy.value);
  }

  // order by x
  switch (orderBy.value) {
    case "bestRate":
      list = list.sort((a, b) => b.rating - a.rating);
      break;
    case "priceMax":
      list = list.sort((a, b) => b.price - a.price);
      break;
    case "priceMin":
      list = list.sort((a, b) => a.price - b.price);
      break;
  }

  // search for y
  if (searchBy.value.trim() !== "") {
    list = list.filter((p) =>
      p.title.toLowerCase().includes(searchBy.value.trim()),
    );
  }

  list.forEach((product) => {
    var item = createProduct(product);
    productsContainer.appendChild(item.shop());
  });
}

function createProduct(product) {
  return new Product(
    product["id"],
    product["title"],
    product["description"],
    product["category"],
    product["price"],
    product["image"],
    product["rating"]["rate"],
    product["rating"]["count"],
  );
}

function loadCart() {
  cartContainer.innerHTML = "";

  const items = JSON.parse(localStorage.getItem("produtos-selecionados")) || [];

  if (items.length === 0) {
    cartContainer.style.display = "none";
    checkoutContainer.style.display = "none";
    priceLabel.textContent = "Adicione produtos ao seu cesto.";
    return;
  }

  cartContainer.style.display = "flex";
  checkoutContainer.style.display = "flex";
  priceLabel.style.display = "block";

  var total = 0;
  items.forEach((product) => {
    var p = createProduct(product);
    total += p.price;
    cartContainer.appendChild(p.cart());
  });

  priceLabel.textContent = "Custo total: " + total + "€\n";
}

function setupFilters() {
  categories.forEach((c) => {
    var opt = document.createElement("option");
    opt.value = c.toLowerCase();
    opt.textContent = c;

    filterBy.appendChild(opt);
  });
}

function purchase() { }
