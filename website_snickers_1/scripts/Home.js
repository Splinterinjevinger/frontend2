
// play/pause button

const videoButton = document.querySelector("main section:nth-of-type(1) button");

videoButton.onclick = togglePlayPause;

function togglePlayPause() {
    const video = document.querySelector('video');
    const image = videoButton.querySelector('img');

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