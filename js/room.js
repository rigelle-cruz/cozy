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

  // Ensure the 'audio-icon' element exists in the HTML before interacting with it
  const audioIcon = document.getElementById('audio-icon');

  if (audioIcon) {
    const audio = new Audio('/assets/music/night.wav'); // Create an audio element

    // Initialize the audio as unmuted
    let isMuted = false;

    audioIcon.addEventListener('click', () => {
      if (isMuted) {
        // Unmute the audio
        audioIcon.classList.remove('muted');
        audioIcon.classList.add('unmuted');
        audio.play();
      } else {
        // Mute the audio
        audioIcon.classList.remove('unmuted');
        audioIcon.classList.add('muted');
        audio.pause();
      }

      // Toggle the muted state
      isMuted = !isMuted;
    });
  }
});




