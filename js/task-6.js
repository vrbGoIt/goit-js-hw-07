const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

const box = document.querySelector("div#boxes");
const numboxes = document.querySelector("div#controls > input");

let size = 30;
let boxis = '';
let boxstr = '';


buttonCreate.addEventListener("click", event => {

  if (numboxes.value > 0 && numboxes.value <= 100) {
    const numb = numboxes.value;
    box.style.padding = "32px";
    for (let index = 0, size = 30; index < numb; index++) {
      let color = getRandomHexColor();
      boxstr = `<div style="background-color: ${color}; max-width: ${size}px; max-height: ${size}px; min-width: ${size}px; min-height: ${size}px;"></div>`;
      boxis = boxis.concat(boxstr);
      size += 10;
    }

    box.insertAdjacentHTML("beforeend", boxis);
  }
});

buttonDestroy.addEventListener("click", event => {
    box.style.padding = "0px";
    box.innerHTML = '';
    boxis = '';
});  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
