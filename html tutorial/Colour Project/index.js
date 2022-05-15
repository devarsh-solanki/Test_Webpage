'use strict';

const mainButton = document.querySelector("button");
const body = document.body;
const main_span = document.querySelector(".main_span");

function getColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const colorSelector = `rgb(${red},${green},${blue})`;
    return colorSelector;
}

mainButton.addEventListener("click",function(){
    const colorPicker = getColorGenerator();
    body.style.backgroundColor = colorPicker;
    main_span.textContent = colorPicker;
});

// -------------------------------------------------------------------------------------------------