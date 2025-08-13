"use strict";

const screen = document.querySelector("#screen");
screen.addEventListener("mouseover", (event) => {
    if (event.target.id !== "screen") {
        event.target.style.backgroundColor = "black";
    }
});

const input = document.querySelector("input");
input.addEventListener("change", (event) => {
    if (!input.validity.valid) {
        input.value = "16";
    }

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    for (let i = 0; i < input.value ** 2; i++) {
        const tile = document.createElement("div");
        tile.style.backgroundColor = "grey";
        tile.style.height = `${100/input.value}%`
        tile.style.width = `${100/input.value}%`
        screen.appendChild(tile);
    }
});
input.dispatchEvent(new Event("change"));
