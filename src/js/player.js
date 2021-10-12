const player = document.getElementById("i-Player");

const myPlay = (event) => {
  const myMusic = document.createElement("audio");
  myMusic.controls = true;
  const musicSource = document.createElement("source");
  musicSource.src = "./assets/mr-oizo.mp3";
  musicSource.type = "audio/mpeg";
  myMusic.appendChild(musicSource);
  myMusic.play();
  console.log("music on play");
};

player.addEventListener("click", myPlay);
