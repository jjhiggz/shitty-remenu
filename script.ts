type Item = {
  name: string;
  description: string;
};

type Section = {
  name: string;
  description: string;
  hasSeparators: boolean;
  items: Item[];
};

type Restaurant = {
  name: string;
  description: string;
  sections: Section[];
};

const restaurant: Restaurant = {
  name: "CTC Cafe",
  description:
    "A full-stack culinary experience where web development meets fine dining. Enjoy a blend of JavaScript-inspired dishes and TypeScript-flavored courses, served with browser-friendly treats.",
  sections: [
    {
      name: "Appetizers & Starters",
      description:
        "Get your appetite 'loading' with these small bites inspired by the world of development.",
      hasSeparators: true,
      items: [
        {
          name: "HTTP Status Nachos",
          description:
            "Crispy tortilla chips topped with HTTP 200 OK queso, HTTP 404 guacamole, and HTTP 500 spicy salsa.",
        },
        {
          name: "TypeScript Tempura",
          description:
            "Lightly battered vegetables, perfectly compiled for crunchiness.",
        },
        {
          name: "React Router Roll",
          description:
            "Sushi roll filled with fresh salmon, avocado, and cucumber, navigated through wasabi and soy sauce routes.",
        },
        {
          name: "Webpack Wontons",
          description:
            "Crispy wontons bundled with pork and vegetable filling, served with a dipping sauce bundle.",
        },
        {
          name: "AJAX Chicken Wings",
          description:
            "Spicy buffalo wings served in real-time with a side of ranch for asynchronous dipping.",
        },
        {
          name: "JSON Dumplings",
          description:
            "Steamed dumplings stuffed with pork and vegetables, a structured flavor payload in every bite.",
        },
        {
          name: "Cache-Control Calamari",
          description:
            "Crispy fried calamari rings with a side of marinara and a TTL (Tasty Time to Live).",
        },
        {
          name: "DevTools Deviled Eggs",
          description:
            "Hard-boiled eggs stuffed with a delicious mixture of mustard, mayo, and development secrets.",
        },
        {
          name: "Node.js Nachos",
          description:
            "A network of crispy chips with melted cheese, jalapeños, and pico de gallo.",
        },
        {
          name: "SQL Sliders",
          description:
            "Mini beef burgers with a side of SELECT fries WHERE flavor = 'delicious'.",
        },
      ],
    },
    {
      name: "Main Courses",
      description:
        "Elevate your coding hunger with our robust, full-stack main courses.",
      hasSeparators: false,
      items: [
        {
          name: "Functional Curried Salmon",
          description:
            "A functional programming twist on a classic: pan-seared salmon with a spicy curry sauce.",
        },
        {
          name: "JavaScript Stir-fry",
          description:
            "Stir-fried chicken with JavaScript variables of vegetables, served with dynamically typed rice.",
        },
        {
          name: "RESTful Ribeye",
          description:
            "Grilled ribeye steak with a side of mashed potatoes, adhering to RESTful service principles.",
        },
        {
          name: "Object-Oriented Lasagna",
          description:
            "Layered pasta, cheese, and Bolognese sauce, perfectly encapsulated for object-oriented flavor.",
        },
        {
          name: "TypeScript Tacos",
          description:
            "Soft shell tacos filled with typed variables of grilled chicken, steak, and avocado.",
        },
        {
          name: "Promises Pot Roast",
          description:
            "Slow-cooked beef roast with carrots and potatoes, delivering on flavor with every fulfilled promise.",
        },
        {
          name: "API Alfredo",
          description:
            "Creamy fettuccine Alfredo with a well-documented side of garlic bread.",
        },
        {
          name: "Full-Stack Filet Mignon",
          description:
            "Tender filet mignon cooked to perfection, with both front-end (garlic butter) and back-end (rosemary potatoes) components.",
        },
        {
          name: "Async Await Asparagus Risotto",
          description:
            "Creamy risotto with fresh asparagus, delivered just in time with asynchronous taste.",
        },
        {
          name: "Vue.js Vegetarian Pizza",
          description:
            "A vegetarian pizza loaded with fresh Vue-ified toppings like spinach, mushrooms, and bell peppers.",
        },
        {
          name: "DOM Duck à l'Orange",
          description:
            "A rich and elegant duck dish, served with a tangy orange sauce and DOM-rendered presentation.",
        },
        {
          name: "Component-based Chicken Parmesan",
          description:
            "Crispy chicken breast layered with mozzarella and marinara, built from modular ingredients.",
        },
        {
          name: "Server-side Souvlaki",
          description:
            "Grilled lamb skewers served with tzatziki and pita, perfect for both client and server appetites.",
        },
        {
          name: "CSS-Styled Stuffed Peppers",
          description:
            "Bell peppers stuffed with rice, ground beef, and perfectly styled herbs and spices.",
        },
      ],
    },
    {
      name: "Desserts & Drinks",
      description:
        "End your coding session with some sweet closures and refreshing beverages.",
      hasSeparators: true,
      items: [
        {
          name: "Cookies & Session Brownies",
          description:
            "Chewy chocolate chip cookies served with a side of session-stored brownies.",
        },
        {
          name: "LocalStorage Lemon Tart",
          description:
            "A zesty lemon tart with a flaky crust, stored locally on your palate.",
        },
        {
          name: "Vanilla JS Ice Cream",
          description:
            "Classic vanilla ice cream with optional JavaScript toppings.",
        },
        {
          name: "IndexedDB Éclair",
          description:
            "A cream-filled pastry, indexed for easy access to flavor.",
        },
        {
          name: "MongoDB Mousse",
          description:
            "Chocolate mousse served with a side of NoSQL whipped cream.",
        },
        {
          name: "Closure Cheesecake",
          description:
            "A rich, creamy cheesecake that encapsulates flavor in every bite.",
        },
        {
          name: "Redux Raspberry Sorbet",
          description:
            "Refreshing raspberry sorbet with a predictable state of flavor.",
        },
        {
          name: "Git Ganache Tart",
          description:
            "Decadent chocolate tart with a rich ganache, version-controlled for maximum indulgence.",
        },
        {
          name: "Event Loop Espresso",
          description:
            "Strong espresso to keep you running through the event loop all night.",
        },
        {
          name: "SQL Injection Smoothie",
          description:
            "A mixed berry smoothie with a safe and secure injection of sweetness.",
        },
        {
          name: "JSON Java",
          description:
            "A robust, black coffee with notes of JSON object structure.",
        },
        {
          name: "404 Float",
          description:
            "Root beer float that can’t be found – just kidding, it’s right here!",
        },
        {
          name: "GraphQL Green Tea",
          description:
            "Refreshing green tea served with a querying aftertaste.",
        },
        {
          name: "AJAX Affogato",
          description:
            "Vanilla ice cream 'updated' with a shot of hot espresso.",
        },
        {
          name: "DOM-tini",
          description:
            "A gin martini with an elegant twist of DOM manipulation.",
        },
      ],
    },
  ],
};

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
