const html = document.documentElement;

export default function () {
    var cliWidth = html.clientWidth;
    html.style.fontSize = 100 * (cliWidth / 750) + "px";
}