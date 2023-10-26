document.addEventListener('DOMContentLoaded', function () {
  function fadeInRoom() {
    const room = document.querySelector('.room');
    room.classList.add('fade-in');
  }

  fadeInRoom();

  const reloadButton = document.getElementById('refresh');

  reloadButton.addEventListener('click', function () {
    location.reload();
  });

  const audioIcon = document.getElementById('audio-icon');

  if (audioIcon) {
    const audio = new Audio('/assets/music/night.wav');
    let isMuted = false;

    audio.play();

    audioIcon.addEventListener('click', () => {
      if (isMuted) {
        audioIcon.classList.remove('muted');
        audioIcon.classList.add('unmuted');
        audio.play();
      } else {
        audioIcon.classList.remove('unmuted');
        audioIcon.classList.add('muted');
        audio.pause();
      }

      isMuted = !isMuted;
    });
  }
});




