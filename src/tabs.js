import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

// tabs 
const createTabs = () => {
    // TODO: replace remove innerHTML with a separate function

    const homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener("click", () => {
        content.innerHTML = "";
        createHomePage();
    });

    const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", () => {
        content.innerHTML = "";
        createMenuPage();
    });
    
    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", () => {
        content.innerHTML = "";
        createContactPage();
    });
   
}

//

export default createTabs;