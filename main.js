const navLinks = document.querySelectorAll("nav a");
const menuIcon = document.querySelector("header div div i");
const navBar = document.querySelector("nav");
const main = document.querySelector("main");
const imgs = document.querySelectorAll("main img");
const modalImg = document.querySelector(".modal img");
const modal = document.querySelector(".modal");

//Navbar links close navbar on click
navLinks.forEach(element => {
    element.onclick = () => {
        navBar.classList.add("hidden");
    }
});

//Menu icon opens and closes navbar
menuIcon.onclick = () => {
    if (navBar.classList.length == 0) {
        navBar.classList.add("hidden");
    } else {
        navBar.classList.remove("hidden");
    }
}

//Clicking outside the navbar closes it
main.onclick = () => {
    navBar.classList.add("hidden");
}

//Cliking on imgs brings up the modal
imgs.forEach(element => {
    element.onclick = () => {
        modalImg.src = element.src;
        modal.classList.remove("hidden");
    }
});

//Clinking outside the image closes de modal
modal.onclick = () => {
    modal.classList.add("hidden");
}
