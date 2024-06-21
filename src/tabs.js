import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

// tabs 
const createTabs = () => {

    const homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener("click", () => {console.log("heyyy")});

    const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", () => {
        content.innerHTML = "";
    });
    menuBtn.addEventListener("click", () => {
        createMenuPage();
    });
   
}

export default createTabs;