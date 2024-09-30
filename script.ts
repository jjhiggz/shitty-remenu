import { restaurant } from "./data";
import type { Item, Restaurant, Section } from "./types";

const getItemsHTML = (items: Item[]) => {
  return items
    .map(
      (item) => `
        <div class="item">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
        </div>
    `
    )
    .join("\n");
};
const getSectionsHTML = (sections: Section[]) => {
  return sections
    .map(
      (section) => `
        <div class="section ">
              <h2>${section.name}</h2>
              <div class="separator"></div>
              <p>${section.description}</p>
              <div class="items ${
                section.hasSeparators ? "has-separators" : ""
              }">${getItemsHTML(section.items)}</div>
        </div>
    `
    )
    .join("\n");
};

const getRestaurantHTML = (restaurant: Restaurant) => {
  const $restaurant = document.createElement("div");
  $restaurant.classList.add("restaurant");

  $restaurant.innerHTML = `
          <header>
            <h1>${restaurant.name}</h1>
            <p>${restaurant.description}</p>
          </header>
          <div class="sections">
                ${getSectionsHTML(restaurant.sections)}
          </div>
  `;
  return $restaurant;
};

document.addEventListener("DOMContentLoaded", () => {
  const $restaurantContainer = document.querySelector(".restaurant-container");

  $restaurantContainer?.append(getRestaurantHTML(restaurant));
});
