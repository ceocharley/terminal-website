const ribbon = document.getElementById('ribbon');
const gwindow = document.getElementById('cmd');

// i did NOT make this code 😁

gwindow.addEventListener("mousedown", function(event) {
  var x = event.clientX;
  var y = event.clientY;

  this.onmousemove = function(event) {
    var newX = event.clientX - x;
    var newY = event.clientY - y;

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // take off 4.5vh for the taskbar
    screenHeight -= 36;

    gwindow.removeAttribute("style");
    gwindow.style.margin = "0";
    gwindow.style.padding = "0";
    gwindow.style.position = "absolute";
    gwindow.style.top = newY + "px";
    gwindow.style.left = newX + "px";
    gwindow.style.zIndex = "99999";
    gwindow.style.overflow = "hidden";
    // dont allow the user to select
    gwindow.style.userSelect = "none";

    // dont let window go off screen
    if (newX < 0) {
      gwindow.style.left = "0";
    }
    if (newY < 0) {
      gwindow.style.top = "0";
    }
    if (newX + gwindow.offsetWidth > screenWidth) {
      gwindow.style.left = screenWidth - gwindow.offsetWidth + "px";
    }
    if (newY + gwindow.offsetHeight > screenHeight) {
      gwindow.style.top = screenHeight - gwindow.offsetHeight + "px";
    }


    // console.log(newX, newY)
  };
});

gwindow.addEventListener("mouseup", function() {
  this.onmousemove = null;
});