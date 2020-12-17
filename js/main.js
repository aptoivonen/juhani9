const setVideoSources = () => {
  const breakPoint = 768;

  if (window.innerWidth < breakPoint) return;

  const videos = document.querySelectorAll("video");
  if (!videos) return;

  videos.forEach((video) => {
    const sources = video.querySelectorAll("source");
    if (sources) {
      sources.forEach((source) => {
        const dataSrc = source.dataset.src;
        if (dataSrc) {
          source.setAttribute("src", dataSrc);
          source.removeAttribute("data-src");
        }
      });
    }
    video.load();
  });
};

addEventListener("resize", () => {
  setVideoSources();
});

setVideoSources();

const staggerAnimations = (animationClassNames) => {
  const baseDelay = 1;
  let delay = 0;
  animationClassNames.forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`);
    if (elements) {
      elements.forEach((element) => {
        element.style.animationDelay = `${delay}s`;
        delay += baseDelay;
      });
    }
  });
};

staggerAnimations(["slide-in-left", "flicker-in-1", "slide-in-right"]);

const playControl = () => {
  const audio = document.querySelector("#audio");
  if (!audio) return;
  const play = document.querySelector("#play");
  if (!play) return;

  const playToggle = () => {
    if (!audio.loop) {
      audio.setAttribute("loop", "");
      audio.play();
    } else if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  play.addEventListener("click", () => {
    console.log("click");
    playToggle();
  });

  // document.addEventListener("touchstart", (event) => {
  //   console.log("touch");
  //   playToggle();
  // });
};

playControl();
