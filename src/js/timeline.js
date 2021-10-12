const timelineHeadItems = document.querySelectorAll(".timeline__head-item")
let activeHeadItem = document.querySelector(".timeline__head-item.active")
timelineHeadItems.forEach((el) => {
    el.addEventListener('click', () => {
        activeHeadItem.classList.remove('active')
        el.classList.add('active')
        activeHeadItem = el
    })
})

const timelineItems = document.querySelectorAll(".timeline__item")
let activeItem = document.querySelector(".timeline__item.active")
let activeDescItem = activeItem.querySelector(".timeline__item-desc.active")
timelineItems.forEach((el) => {
    el.addEventListener('click', () => {
        activeItem.querySelector(".timeline__item-desc.active").classList.remove("active")
        activeItem.classList.remove('active')
        el.classList.add('active')
        activeItem = el
        console.log(el)
        el.querySelector(".timeline__item-desc").classList.add("active")
    })
})