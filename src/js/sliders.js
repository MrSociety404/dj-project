const controls = document.querySelector('.partners .navigation')
const controlsBtn = document.querySelectorAll(".navigation-btn")

const toggleBtn = () => {
    if(controlsBtn[0].classList.contains('active')) {
        controlsBtn[0].classList.remove("active")
        controlsBtn[1].classList.add("active")
    } else {
        controlsBtn[1].classList.remove("active")
        controlsBtn[0].classList.add("active")
    }
}

const slide = () => {
    let currentSlide = document.querySelector(".partners__logos.active")
    let nextSlide = document.querySelector(".partners__logos.hidden")
    toggleBtn()
    currentSlide.animate({transform: 'translateX(-100vw)'}, {duration: 450, easing: "ease-in-out"})
    setTimeout(() => {
        currentSlide.classList.add("hidden")
        currentSlide.classList.remove("active")
        nextSlide.classList.add("active")
        nextSlide.classList.remove("hidden")
    }, 440)
}

controls.addEventListener("click", slide)