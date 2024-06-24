const createMenuPage = () => {

    const menuItems = [
        [
            {
                header: "Cakes"
            },
            {
                title: "Peanut Butter Chocolate Pecan Banana",
                description: "Peanut Butter Chocolate Pecan Banana",
                price: "5.00"
    
            },
            {
                title: "Cherry Bomb",
                description: "Cherries, blueberries, blackberries, raspberries with lemon curd",
                price: "5.00"
    
            },
        ],
        [
            {
                header: "Bakes"
            },
            {
                title: "Apple Pie",
                description: "roasty apples and cinnamon with walnuts",
                price: "5.00"
    
            },            {
                title: "Strawberries and Cream",
                description: "Sweet strawberries, passionfruit, and a heavy whipped cream",
                price: "5.00"
    
            }
        ],
    ]

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
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

    // const item1 = document.createElement("div");
    // item1.setAttribute("class", "menu-card");
    // item1.innerText = "this is the first menu item card. add photo, name, description, price, add to bag button";
    // main.appendChild(item1);

    // const item2 = document.createElement("div");
    // item2.setAttribute("class", "menu-card");
    // item2.innerText = "this is the second menu item card.";
    // main.appendChild(item2);

    // iterate over menu array
    for (let section of menuItems){
        // console.log('section', section);
        for (let item of section){
            // console.log(item);
            if (item.header){
                let menuHeader = document.createElement("div");
                menuHeader.setAttribute("class", "header");
                menuHeader.textContent = `${item.header}`;
                main.appendChild(menuHeader);

                let menuSection = document.createElement("div");
                menuSection.setAttribute("class", "section");
                main.appendChild(menuSection);
            }
            if (item.title){
                let menuCard = document.createElement("div");
                menuCard.setAttribute("class", "card");
                main.lastChild.appendChild(menuCard);

                let menuTitle = document.createElement("h3");
                let menuDescription = document.createElement("p");
                let menuPrice = document.createElement("button");
                menuPrice.setAttribute("class", "menu-btn");

                menuTitle.textContent = item.title;
                menuDescription.textContent = item.description;
                menuPrice.textContent = item.price;
                

                menuCard.appendChild(menuTitle);
                menuCard.appendChild(menuDescription);
                menuCard.appendChild(menuPrice);

            }
        }
    }
};

export default createMenuPage;