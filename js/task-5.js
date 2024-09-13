
const button = document.querySelector("button.change-color");
const body = document.querySelector("body");
const span = document.querySelector("span.color");

button.addEventListener("click", event => {
  const hex = getRandomHexColor();
  body.style.backgroundColor = "rgb(" +
    parseInt(hex.slice(1, 3), 16) + ',' +
    parseInt(hex.slice(3, 5), 16) + ',' +
    parseInt(hex.slice(5, 7), 16) + ")";
  ;
  
  span.style.color = "rgb(" +
    parseInt(hex.slice(1, 3), 16) + ',' +
    parseInt(hex.slice(3, 5), 16) + ',' +
    parseInt(hex.slice(5, 7), 16) + ")";
  ;

});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

