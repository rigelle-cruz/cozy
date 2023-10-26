function switchLaptopImage() {
  const laptopImage = document.getElementById('laptop-image');

  if (laptopImage.classList.contains('laptop-off')) {
      laptopImage.src = 'assets/furniture/laptop-on.svg';
      laptopImage.classList.remove('laptop-off');
      laptopImage.classList.add('laptop-on');
  } else {
      laptopImage.src = 'assets/furniture/laptop-off.svg';
      laptopImage.classList.remove('laptop-on');
      laptopImage.classList.add('laptop-off');
  }
}

