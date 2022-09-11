import { create } from "lodash";
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

    const $caffine = createHtmlElement(
        "h3", 
        null, 
        ["gold"], 
        "Caffeinated Beverages"
    );

    const $caffineContentCapa = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Capaccino - £3"
    )

    const $caffineContentMocha = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Mocha - £3"
    )

    const $caffineContentFrapa = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Frapaccino - £3"
    )

    const $caffineContentLatte = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Latte - £3"
    )

    const $menuhr = document.createElement("menu-hr");

    const $juices = createHtmlElement(
        "h3", 
        null, 
        ["gold"], 
        "Fresh Juices"
    );

    const $juiceSeasonal = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Seasonal - £3.50"
    )

    const $juiceApple = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Apple - £3.50"
    )

    const $juicePinacolada = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Pinacolada - £3.50"
    )

    const $menuhr2 = document.createElement("menu-hr");

    const $icedCoffee = createHtmlElement(
        "h3", 
        null, 
        ["gold"], 
        "Iced Coffee"
    );


    const $icedAmerica = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Iced Americano - £3.20"
    )

    const $icedFrappaccino = createHtmlElement (
        "p",
        null,
        ["gold"], 
        "Frappaccino - £3.20"
    )

    const $hr2 = document.createElement("hr");
    
        $mainMenu.appendChild($cafeTitle);
        $mainMenu.appendChild($menuTitle);
        $mainMenu.appendChild($hr);
        $mainMenu.appendChild($caffine);
        $mainMenu.appendChild($caffineContentCapa);
        $mainMenu.appendChild($caffineContentMocha);
        $mainMenu.appendChild($caffineContentFrapa);
        $mainMenu.appendChild($caffineContentLatte);
        $mainMenu.appendChild($menuhr);
        $mainMenu.appendChild($juices);
        $mainMenu.appendChild($juiceSeasonal);
        $mainMenu.appendChild($juiceApple);
        $mainMenu.appendChild($juicePinacolada);
        $mainMenu.appendChild($menuhr2);
        $mainMenu.appendChild($icedCoffee);
        $mainMenu.appendChild($icedAmerica);
        $mainMenu.appendChild($icedFrappaccino);
        $mainMenu.appendChild($hr2);

        $content.appendChild($mainMenu);
}

export { render as renderMenu };