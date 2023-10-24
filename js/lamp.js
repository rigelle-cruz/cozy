document.addEventListener("DOMContentLoaded", function () {
  const lampImage = document.getElementById("lamp-image");
  const lightSource = document.getElementById("light-source");
  let isLampOn = false; // Flag variable to track the lamp's state

  lampImage.addEventListener("click", function () {
    if (isLampOn) {
      lightSource.style.opacity = 0; 
      isLampOn = false; 
    } else {
      lightSource.style.opacity = 0.7; 
      isLampOn = true; 
    }
  });
});

