import { $content, createHtmlElement } from "./index";

function render() {
    const $aboutPage = document.createElement("main-about");

    const $cafeTitle = createHtmlElement(
        "h2", 
        null, 
        ["main-color"], 
        "Hilltop Café"
    );

    const $aboutTitle = createHtmlElement(
        "h1", 
        null, 
        ["gold"], 
        "about"
    );
        
    const $hr = document.createElement("hr");

    const content =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod";
    const $p = createHtmlElement("p", null, ["menu-item"], content);

    
    $aboutPage.appendChild($cafeTitle);
    $aboutPage.appendChild($aboutTitle);
    $aboutPage.appendChild($hr);
    $aboutPage.appendChild($p);
    
    $content.appendChild($aboutPage);
}

export { render as renderAbout };