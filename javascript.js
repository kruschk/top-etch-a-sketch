"use strict";

const screen = document.querySelector("#screen");
const tilesAlongEdge = document.querySelector("#tilesAlongEdge");

const computeTileEdgeLength = count => `${100 / count}%`;

function generateRandomRGB() {
    const generateColourComponent = () => Math.floor(256 * Math.random());
    const red = generateColourComponent();
    const green = generateColourComponent();
    const blue = generateColourComponent();
    return `rgb(${red}, ${green}, ${blue})`;
}

screen.addEventListener("mouseover", (event) => {
    if (event.target.id !== "screen") {
        const style = event.target.style;
        // Progressive darkening
        style.opacity = Math.min(+style.opacity + 0.1, 1).toString();
        style.backgroundColor = generateRandomRGB();
    }
});

tilesAlongEdge.addEventListener("change", (event) => {
    if (!tilesAlongEdge.validity.valid) {
        tilesAlongEdge.value = "4";
    }

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    for (let i = 0; i < tilesAlongEdge.value ** 2; i++) {
        const tile = document.createElement("div");
        tile.style.height = computeTileEdgeLength(tilesAlongEdge.value);
        tile.style.width = computeTileEdgeLength(tilesAlongEdge.value);
        screen.appendChild(tile);
    }
});
tilesAlongEdge.dispatchEvent(new Event("change"));
