import { $content, createHtmlElement } from "./index";

function render() {
    const $mainMenu = document.createElement("main-menu");

    const $cafeTitle = createHtmlElement(
        "h2", 
        null, 
        ["main-color"], 
        "Hilltop Café"
    );

    const $menuTitle = createHtmlElement(
        "h1", 
        null, 
        ["gold"], 
        "menu"
    );
        
    const $hr = document.createElement("hr");
    
        $mainMenu.appendChild($cafeTitle);
        $mainMenu.appendChild($menuTitle);
        $mainMenu.appendChild($hr);

        $content.appendChild($mainMenu);
}

export { render as renderMenu };