
const form = document.querySelector(".login-form");
const user = {};

form.addEventListener("submit", event => {
    event.preventDefault();

    user.email = event.target.elements.email.value.trim();
    user.password = event.target.elements.password.value.trim();

    if (user.email === "" || user.password === "") {
        alert('All form fields must be filled in');
    }
    else {
        form.reset();
        console.log(user);
    }
});


