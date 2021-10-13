const menuOpen = document.querySelector(".header__mobile-hamburger")
const menuClose = document.querySelector(".header__mobile-cross")
const navMobile = document.querySelector(".header__mobile-nav")
const header = document.querySelector(".header")
let lastScrollValue = 0

menuOpen.addEventListener("click",() => {
    navMobile.classList.add("open")
})

menuClose.addEventListener("click",() => {
    navMobile.classList.remove("open")
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }

    let distanceScrolled = window.scrollY || document.documentElement.scrollTop
    if(distanceScrolled > lastScrollValue) {
        header.style.opacity = 0
    } else {
        header.style.opacity = 1
    }
    lastScrollValue = distanceScrolled
})