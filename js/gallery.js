descriptions = ["Pressure over time",
"Pressure over time (Contour)",
"Maximum Pressure over time", 
"Temperature over time",
"Maximum Temperature over time",
"Density over time",
"Maximum Density over time",
"Velocity Magnitude over time",
"Maximum Velocity Magnitude over time",
"Energy and Pressure Overlay",
"Temperature, Pressure, Density and Velocity Scatterplot",
"Density, Temperature, and Pressure Parallel Lines"]


function cancelFullScreen() {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msCancelFullScreen) {
    document.msCancelFullScreen();
  }
  link = document.getElementById("container");
  link.removeAttribute("onclick");
  link.setAttribute("onclick", "fullScreen(this)");
}

function fullScreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
  link = document.getElementById("container");
  link.removeAttribute("onclick");
  link.setAttribute("onclick", "cancelFullScreen()");
}

window.onload = function() {
  imgs = document.getElementById('slideshow').getElementsByTagName('img');
  currentPic = 0;
  imgs[currentPic].style.opacity = 1;
  document.getElementById('figcap').innerHTML="Figure " + (currentPic+1) + ": " + descriptions[currentPic];
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
      case 38:
        imgs[currentPic].removeAttribute('style');
        if (currentPic == 0) {
          //currentPic = imgs.length - 1; //uncomment to loop
        } else {
          currentPic--;
          imgs[currentPic].src = imgs[currentPic].src
        }
        imgs[currentPic].style.opacity = 1;
        document.getElementById('figcap').innerHTML="Figure " + (currentPic+1) + ": " + descriptions[currentPic];
        
        break;
      case 39:
      case 40:
        imgs[currentPic].removeAttribute('style');
        if (currentPic == imgs.length - 1) {
          //currentPic = 0; //uncomment to loop
        } else {
          currentPic++;
          imgs[currentPic].src = imgs[currentPic].src
        }
        imgs[currentPic].style.opacity = 1;
        document.getElementById('figcap').innerHTML="Figure " + (currentPic+1) + ": " + descriptions[currentPic];
        
        break;
    }
  }
};