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
