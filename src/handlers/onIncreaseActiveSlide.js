export default function onIncreaseActiveSlide(activeSlide, setActiveSlide) {
  if (activeSlide === 6) {
    setActiveSlide(1);
  } else {
    setActiveSlide(activeSlide + 1);
  }
}
