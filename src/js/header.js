const menuOpen = document.querySelector(".header__mobile-hamburger")
const menuClose = document.querySelector(".header__mobile-cross")
const navMobile = document.querySelector(".header__mobile-nav")

menuOpen.addEventListener("click",() => {
    navMobile.classList.add("open")
})

menuClose.addEventListener("click",() => {
    navMobile.classList.remove("open")
})