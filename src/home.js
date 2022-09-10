import { $content, createHtmlElement } from "./index";


function render() {
    const $main = document.createElement("main");

    const $welcome = createHtmlElement(
        "p", 
        null, 
        ["main-color"], 
        "Welcome To"
    );

    const $title = createHtmlElement(
        "h1", 
        null, 
        ["gold"], 
        "hilltop café"
        );

    const $hr = document.createElement("hr");
    const $subtitle = createHtmlElement(
        "h3", 
        null, 
        ["text-center"],
        "The #1 place to relax and dine!"
    );

    const $button = createHtmlElement("button", null, null, "Our Menu");

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($subtitle);
    $main.appendChild($button);

    $content.appendChild($main);
}

export { render as renderHome };




