const navLinks = document.querySelectorAll("nav a");
const menuIcon = document.querySelector("header div div i");
const navBar = document.querySelector("nav");
const main = document.querySelector("main");

//Navbar links close navbar on click
navLinks.forEach(element => {
    element.onclick = () => {
        navBar.classList = ["hidden"];
    }
});

//Menu icon opens and closes navbar
menuIcon.onclick = () => {
    if (navBar.classList.length == 0) {
        navBar.classList = ["hidden"];
    } else {
        navBar.classList = [""];
    }
}

//Clicking outside the navbar closes it
main.onclick = () => {
    navBar.classList = ["hidden"];
}
