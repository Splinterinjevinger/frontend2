
// play/pause button

function togglePlayPause(button) {
    const video = document.querySelector('video');
    const image = button.querySelector('img');

    if (video.paused) {
      video.play();
      image.src = 'images/play button.svg';
      image.alt = 'Pause';
    } else {
      video.pause();
      image.src = 'images/play button.svg';
      image.alt = 'Play';
    }
  }

//   https://codepen.io/gunnarbittersmann/pen/vYKKJRg



// hamburger (nog fixenn)

const openKnop = document.querySelector("header > button");
const menu = document.querySelector("header nav");
const sluitKnop = document.querySelector("nav button");

// openen/ sluiten
function wisselMenu() {
  const menuStatus = menu.getAttribute("openMenu");
  
  if (menuStatus === "true") {
    menu.setAttribute("data-visible", "false");
    document.body.style.overflow = "auto";
  } else {
    menu.setAttribute("data-visible", "true");
    document.body.style.overflow = "hidden";
  }
}

// openKnop.addEventListener("click", wisselMenu);
// sluitKnop.addEventListener("click", wisselMenu);