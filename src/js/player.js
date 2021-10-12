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

progress.addEventListener("click", (e) => {
  audio.currentTime = (e.layerX / 100) * 19
  if(!isPlaying(audio)) toggleMusic()
  else audio.play()
});
