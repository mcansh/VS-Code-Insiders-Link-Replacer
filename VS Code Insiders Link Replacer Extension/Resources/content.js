// remap all links to vscode:// to vscode-insiders://
function updateLinks() {
let elements = Array.from(document.querySelectorAll('a[href^="vscode:"]'));

    for (let element of elements) {
        let url = new URL(element.href);
        url.protocol = "vscode-insiders:";
        element.href = url.href;
    }
}

updateLinks();

let observer = new MutationObserver(updateLinks);

observer.observe(document.body, {
    attributes: true,
    childList: true,
    characterData: true,
});
