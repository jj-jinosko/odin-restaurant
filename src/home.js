// home.js

const createHomePage = () => {
    const main = document.createElement("div");
    main.setAttribute("id", "home");
    content.appendChild(main);

    // create and append hero div
    const hero = document.createElement("div");
    hero.setAttribute("class", "hero");
    main.appendChild(hero);

    // create and append hero header
    const slogan = document.createElement("h1");
    slogan.innerText = "Healthy Never Tasted So Sweet";
    hero.appendChild(slogan);

    // create and append hero description
    const description = document.createElement("p");
    description.innerText ="Indulge in something savory or sweet with our protein-packed oat-based cakes, bakes, and smoothies.";
    hero.appendChild(description);

    // create and append hero img
    const heroImg = document.createElement("img");
    heroImg.setAttribute("src", "../img/brooke-lark-W9OKrxBqiZA-unsplash.jpg");
    heroImg.setAttribute("alt", "delicious oatmeal and fruit");
    hero.appendChild(heroImg);
}

export default createHomePage;