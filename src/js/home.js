let contDownDate = new Date("December 25, 2021 17:00:00").getTime()
const docDays = document.querySelector('#days')
const docHours = document.querySelector('#hours')
const docMinutes = document.querySelector('#minutes')
const docSeconds = document.querySelector('#seconds')

setInterval(() => {
    let now = new Date().getTime()
    let distance = contDownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    docDays.textContent = days
    docHours.textContent = hours
    docMinutes.textContent = minutes
    docSeconds.textContent = seconds
},1000)