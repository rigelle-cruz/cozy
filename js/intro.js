document.addEventListener("DOMContentLoaded", function () {
  const introScreen = document.getElementById("intro-screen");
  const startButton = document.getElementById("start-button");
  const gameRoom = document.querySelector(".room");

  startButton.addEventListener("click", function () {
    introScreen.style.display = "none";
    gameRoom.style.display = "block";
  });
});
