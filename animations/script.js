const icon = document.getElementsByClassName("icon")[0]
const playButton = document.getElementById("play-button")
const pauseButton = document.getElementById("pause-button")

playButton.addEventListener('click', () => icon.style.animationPlayState = "running")
pauseButton.addEventListener('click', () => icon.style.animationPlayState = "paused")