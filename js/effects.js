const sliderElement = document.querySelector(".effect-level__slider");

const valueElement = document.querySelector(".effect-level__value");

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
  sliderElement.noUiSlider.on("update", () => {
    valueElement.value = sliderElement.noUiSlider.get();
    console.log(valueElement.value);
  });
};

const resetEffects = () => {};

export { effects, resetEffects };
