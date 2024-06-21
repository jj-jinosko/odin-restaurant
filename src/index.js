import "./style.css";

console.log("testing testing 1234");

// tabs 










const content = document.getElementById("content");

// ----------- Home ----------- 

const main = document.createElement("div");
main.setAttribute("id", "home");
const hero = document.createElement("div");
hero.setAttribute("class", "hero");
const slogan = document.createElement("h1");
slogan.innerText = "Healthy Never Tasted So Sweet";
const description = document.createElement("p");
description.innerText ="Indulge in something savory or sweet with our protein-packed oat-based cakes, bakes, and smoothies.";
const heroImg = document.createElement("img");
heroImg.setAttribute("src", "../img/brooke-lark-W9OKrxBqiZA-unsplash.jpg");
heroImg.setAttribute("alt", "delicious oatmeal and fruit");



content.appendChild(main);
main.appendChild(hero);
hero.appendChild(slogan);
hero.appendChild(description);
hero.appendChild(heroImg);

const node = document.createTextNode("TestingTestingTesting");
main.appendChild(node);

// const element = document.getElementById("content");
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");

// para.appendChild(node);
// element.appendChild(para);

// ----------- Menu ----------- 


// ----------- Contact ----------- 