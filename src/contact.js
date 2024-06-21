

const createContactPage = () => {
    // create and append contact 
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    content.appendChild(contact);

    // create and append contact header
    const slogan = document.createElement("h1");
    slogan.innerText = "Find a location near you!";
    contact.appendChild(slogan);

    // create and append contact description
    // const description = document.createElement("p");
    // description.innerText ="Indulge in something savory or sweet with our protein-packed oat-based cakes, bakes, and smoothies.";
    // contact.appendChild(description);

    // create and append main contact container
    const main = document.createElement("div");
    main.setAttribute("class", "main");
    main.textContent = "here's where the main info will go for the contact page";
    contact.appendChild(main);

}

export default createContactPage;