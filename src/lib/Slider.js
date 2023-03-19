export const SliderFunc = () => {
  const sliderParent = document.querySelector(".slider");
  let current =
    sliderParent && sliderParent.hasAttribute("current")
      ? parseInt(sliderParent.getAttribute("current"))
      : 0;
  const duration =
    sliderParent && sliderParent.hasAttribute("duration")
      ? parseInt(sliderParent.getAttribute("duration"))
      : 4000;
  const Sliders = sliderParent && document.querySelector(".slider").children;
  for (const s in Sliders) {
    if (Object.hasOwnProperty.call(Sliders, s)) {
      const slide = Sliders[s];
      slide.classList.remove("active");
    }
  }

  Sliders[current].classList.add("active");
  function Slide() {
    current++;
    current = current > Sliders.length - 1 ? 0 : current;
    for (const s in Sliders) {
      if (Object.hasOwnProperty.call(Sliders, s)) {
        const slide = Sliders[s];
        slide.classList.remove("active");
      }
    }
    Sliders[current].classList.add("active");

    setTimeout(Slide, duration);
  }

  Slide();
};
