export class Product {
  constructor(id, title, description, price, image) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.alt = image.split("/").pop();
  }
  #base() {
    const item = document.createElement("article");
    item.className = "item";

    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = this.title;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = this.description;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = "Custo total: " + this.price + "€";

    const image = document.createElement("img");
    image.className = "image";
    image.src = this.image;
    image.alt = this.alt;

    item.appendChild(title);
    item.appendChild(image);
    item.appendChild(price);
    item.appendChild(description);

    return item;
  }
  shop() {
    const item = this.#base();

    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "+ Adicionar ao Cesto";

    button.addEventListener("click", () => {
      const event = new CustomEvent("onItemAdd", {
        detail: this,
      });
      document.dispatchEvent(event);
    });

    item.appendChild(button);

    return item;
  }

  cart() {
    const item = this.#base();

    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "- Remover do Cesto";

    button.addEventListener("click", () => {
      const event = new CustomEvent("onItemRemove", {
        detail: this,
      });
      document.dispatchEvent(event);
    });

    item.appendChild(button);

    return item;
  }
}
