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
    let audioPath = 'assets/music/night.wav'; 
    if (window.location.hostname === 'rigelle-cruz.github.io') { 
      audioPath = '/cozy/assets/music/night.wav'; 
    }
    const audio = new Audio(audioPath);

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




