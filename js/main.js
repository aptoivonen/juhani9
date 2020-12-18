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

const staggerAnimations = (animationClassNames, baseDelay) => {
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

staggerAnimations(
  ["slide-in-left", "flicker-in-1", "puff-in-center", "slit-in-vertical"],
  1
);
staggerAnimations(["wobble-letter"], 1);
