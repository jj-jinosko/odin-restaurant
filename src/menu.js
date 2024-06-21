
const createMenuPage = () => {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("class", "main");
    content.appendChild(menu);

    // create and append hero
    const hero = document.createElement("div");
    hero.setAttribute("class","hero");
    menu.appendChild(hero);

    // create and append hero elements
    const heroh1 = document.createElement("h1");
    heroh1.innerText = "This is the menu";
    hero.appendChild(heroh1);

    const heroDescription = document.createElement("p");
    heroDescription.innerText = "So good";
    hero.appendChild(heroDescription);

    // create and append main
    const main = document.createElement("div");
    main.setAttribute("class", "main");
    menu.appendChild(main);

    const item1 = document.createElement("div");
    item1.setAttribute("class", "menu-card");
    item1.innerText = "this is the first menu item card. add photo, name, description, price, add to bag button";
    main.appendChild(item1);

    const item2 = document.createElement("div");
    item2.setAttribute("class", "menu-card");
    item2.innerText = "this is the second menu item card.";
    main.appendChild(item2);
};

export default createMenuPage;