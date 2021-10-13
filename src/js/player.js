const player = document.getElementById("i-Player");
const audio = document.querySelector(".home__music-controls");
const timer = document.querySelector(".home__music-actual-time");
const progressBar = document.querySelector(".home__music-player-bar");
const progress = document.querySelector(".home__music-player");
let minutes = "00";
let seconds = "00";

/**
 * @param {HTMLElement} audelem
 * @returns true if the music is playing
 */
const isPlaying = (audelem) => {
  return !audelem.paused;
};

/**
 * toggle the play pause button
 */
const toggleMusic = () =>  {
  if (isPlaying(audio)) {
    audio.pause();
    player.classList.remove("bx-pause");
    player.classList.add("bx-play");
  } else {
    audio.play();
    player.classList.add("bx-pause");
    player.classList.remove("bx-play");
  }
}

player.addEventListener("click", toggleMusic);

audio.addEventListener("timeupdate", (e) => {
  let currentTime = Math.floor(audio.currentTime);
  timer.textContent = `${minutes}.${seconds}`;
  minutes = Math.floor(currentTime / 60) % 60;
  seconds = currentTime < 60 ? currentTime : currentTime - minutes * 60;
  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10) minutes = "0" + minutes;
  progressBar.style.width =
    (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";
});

progress.addEventListener('click', function (event) {
  let coordStart = this.getBoundingClientRect().left
  let coordEnd = event.pageX
  let p = (coordEnd - coordStart) / this.offsetWidth
  progressBar.style.width = p.toFixed(3) * 100 + '%'

  audio.currentTime = p * audio.duration
  if(!isPlaying(audio)) toggleMusic()
  else audio.play()
})