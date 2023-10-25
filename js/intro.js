function fadeAndRedirect() {
  const button = document.getElementById('intro-screen');
  button.style.opacity = 0;
  button.style.transition = 'opacity 1s';

  setTimeout(() => {
    window.location.href = 'room.html';
  }, 1000);
}
