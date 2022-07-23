const sliderElement = document.querySelector(".effect-level__slider");

const sliderInit = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 80,
    step: 1,
    connect: "lower",
  });
};

const effects = () => {
  sliderInit();
};
const resetEffects = () => {};

export { effects, resetEffects };
