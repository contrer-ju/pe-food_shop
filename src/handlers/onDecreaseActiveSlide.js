export default function onDecreaseActiveSlide(activeSlide, setActiveSlide) {
  if (activeSlide === 1) {
    setActiveSlide(6);
  } else {
    setActiveSlide(activeSlide - 1);
  }
}
