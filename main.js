const navbar = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper")
window.addEventListener("scroll", () => {
if (window.scrollY >= window.innerHeight / 4) {
    navbar.classList.add("navbar-white");
    navWrapper.classList.add("top");
} else {
    navbar.classList.remove("navbar-white");
    navWrapper.classList.remove("top");
}
});

//**form input**//
const form = document.querySelector('.form');
const email= document.querySelector('.input-element');
const account= document.getElementById('account');

form.addEventListener('submit',(event) => {
event.preventDefault();
account.innerHTML = email.value

});