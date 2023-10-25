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

});

