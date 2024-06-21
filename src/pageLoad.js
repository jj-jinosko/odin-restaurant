import createTabs from "./tabs.js";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";


function initialLoad() {
    // const content = document.getElementById("content");
    createTabs();
    createHomePage();
}

export default initialLoad;