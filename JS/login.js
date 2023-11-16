const container = document.querySelector(".container");
const loginLink = document.querySelector(".login-link");
const signupLink = document.querySelector(".signup-link");
const iconClose = document.querySelector(".icon-close")

signupLink.addEventListener('click', () => {
    container.classList.add("active")
})

loginLink.addEventListener('click', () => {
    container.classList.remove("active")
})