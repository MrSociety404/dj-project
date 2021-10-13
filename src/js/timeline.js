const timelineHeadItems = document.querySelectorAll(".timeline__head-item")
const timelineItems = document.querySelectorAll(".timeline__item")
let timelineList = document.querySelectorAll(".timeline__list")
let activeList = document.querySelector('.timeline__list.active')
let activeItem = document.querySelector(".timeline__item.active")
let activeDescItem = activeItem.querySelector(".timeline__item-desc.active")
let activeHeadItem = document.querySelector(".timeline__head-item.active")

/**
 * @param {HTMLElement} activeEl the actual active to hide
 * @param {HTMLElement} newEl new element to display
 */
const toggleActive =  (activeEl, newEl) => {
    activeEl.classList.remove('active')
    newEl.classList.add('active')
}

/**
 * @param {HTMLElement} activeList active element to hide
 * @param {HTMLElement} newList new element to display
 */
const toggleList = (activeList, newList) => {
    activeList.classList.remove("active")
    activeList.classList.add("hidden")
    newList.classList.remove('hidden')
    newList.classList.add("active")
}

timelineHeadItems.forEach((el) => {
    el.addEventListener('click', () => {
        toggleActive(activeHeadItem, el)
        toggleList(activeList, timelineList[el.id]) 
        activeList = document.querySelector('.timeline__list.active')
        activeHeadItem = el
        activeItem = document.querySelector(".timeline__list.active .timeline__item.active")
    })
})

timelineItems.forEach((el) => {
    el.addEventListener('click', () => {
        activeItem.querySelector(".timeline__item-desc.active").classList.remove("active")
        toggleActive(activeItem, el)
        activeItem = el
        el.querySelector(".timeline__item-desc").classList.add("active")
    })
})