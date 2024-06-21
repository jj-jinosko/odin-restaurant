import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

function initialLoad() {
    // const content = document.getElementById("content");
    createHomePage();
    createMenuPage();
    createContactPage();
}

export default initialLoad;