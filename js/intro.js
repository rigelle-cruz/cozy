document.addEventListener("DOMContentLoaded", function () {
  const introScreen = document.getElementById("intro-screen");
  const room = document.querySelector(".room");
  const startButton = document.getElementById("start-button");

  startButton.addEventListener("click", function () {
    introScreen.style.display = "none";

   
    room.style.display = "block";
    room.classList.add("room-fade-in");
  });
});
