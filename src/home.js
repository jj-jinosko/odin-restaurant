// home.js

import createMenuPage from "./menu";

const createHomePage = () => {

    const home = document.createElement("div");
    home.setAttribute("id", "home");
    content.appendChild(home);

    // create and append hero div
    const hero = document.createElement("div");
    hero.setAttribute("class", "hero");
    home.appendChild(hero);

    // create and append hero header
    const slogan = document.createElement("h1");
    slogan.innerText = "Healthy Never Tasted So Sweet";
    hero.appendChild(slogan);

    // create and append hero description
    const description = document.createElement("p");
    description.innerText ="Indulge in something savory or sweet with our protein-packed oat-based cakes, bakes, and smoothies.";
    hero.appendChild(description);

    // create and append hero img
    // const heroImg = document.createElement("img");
    // heroImg.setAttribute("src", "../img/brooke-lark-W9OKrxBqiZA-unsplash.jpg");
    // heroImg.setAttribute("alt", "delicious oatmeal and fruit");
    // hero.appendChild(heroImg);


    // create and append main home container
    // const main = document.createElement("div");
    // main.setAttribute("class", "main");
    // main.textContent = "here's where the main info will go for the homepage";
    // home.appendChild(main);

    // create and append a start order button
    const orderBtn = document.createElement("button");
    orderBtn.innerText = "Order Now";
    hero.appendChild(orderBtn);
    orderBtn.addEventListener("click", () => {
        content.innerHTML = "";
        createMenuPage();
    });
}

export default createHomePage;