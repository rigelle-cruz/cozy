dragElement(document.getElementById("wall-decor"));
dragElement(document.getElementById("table"));
dragElement(document.getElementById("comp-chair"));
dragElement(document.getElementById("lamp"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.e;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.e;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function resetRoom() {
  document.getElementById("wall-decor").style.transform = "initial";
  document.getElementById("table").style.transform = "initial";
  document.getElementById("comp-chair").style.transform = "initial";
  document.getElementById("lamp").style.transform = "initial";
}

dragElement(document.getElementById("wall-decor"));
dragElement(document.getElementById("table"));
dragElement(document.getElementById("comp-chair"));
dragElement(document.getElementById("lamp"));

const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", resetRoom);