import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

// tabs 
const createTabs = () => {
    // TODO: replace remove innerHTML with a separate function

    const homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener("click", () => {
        clearContent();
        createHomePage();
    });

    const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    });
    
    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", () => {
        clearContent();
        createContactPage();
    });

    function clearContent() {
        const content = document.querySelector("#content");
        const pageContent = document.querySelector("#home") || document.querySelector("#menu") || document.querySelector("#contact");
        // console.log(pageContent);
        if (pageContent) {
            content.removeChild(pageContent);
        }


    }
   
}

//

export default createTabs;