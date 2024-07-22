const field = document.querySelector("input#name-input");
const spanName = document.querySelector("h1>span#name-output");

console.log(field);

field.addEventListener("input", event => {
    event.preventDefault();
    
    if (event.target.value.trim().length > 0) {
        spanName.textContent = event.target.value.trim();
    }
    else {
        spanName.textContent = 'Anonymous';
    }
});