import { useContext, useEffect } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link } from "react-router-dom";
import rightArrow from "../images/icons8-chevron-right-64.png";
import leftArrow from "../images/icons8-chevron-left-64.png";
import grayRightArrow from "../images/icons8-chevron-right-64-gray.png";
import grayLeftArrow from "../images/icons8-chevron-left-64-gray.png";
import playSign from "../images/icons8-play-30.png";
import pauseSign from "../images/icons8-pause-30.png";
import desserts from "../images/carousel/salads1.jpg";
import salads from "../images/carousel/salads2.jpg";
import sandwichs from "../images/carousel/salads3.jpg";
import burgers from "../images/carousel/salads4.jpg";
import breakfasts from "../images/carousel/salads5.jpg";
import juices from "../images/carousel/salads6.jpg";

export default function Home() {
  const {
    setOpenMenu,
    activeSlide,
    startCarousel,
    setStartCarousel,
    increaseActiveSlide,
    decreaseActiveSlide,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (startCarousel)
      setTimeout(() => {
        increaseActiveSlide();
      }, 5000);
  });

  return (
    <div className="home" onClick={() => setOpenMenu(false)}>
      <div>
        <Link className={activeSlide === 6 ? "" : "disabledLink"} to={"juices"}>
          <img
            className={
              activeSlide === 5
                ? "carouselRightImage"
                : activeSlide === 6
                ? "carouselActiveImage"
                : activeSlide === 1
                ? "carouselLeftImage"
                : "hideElement"
            }
            src={juices}
            alt="carousel"
          />
        </Link>
        <Link
          className={activeSlide === 1 ? "" : "disabledLink"}
          to={"desserts"}
        >
          <img
            className={
              activeSlide === 6
                ? "carouselRightImage"
                : activeSlide === 1
                ? "carouselActiveImage"
                : activeSlide === 2
                ? "carouselLeftImage"
                : "hideElement"
            }
            src={desserts}
            alt="carousel"
          />
        </Link>
        <Link className={activeSlide === 2 ? "" : "disabledLink"} to={"salads"}>
          <img
            className={
              activeSlide === 1
                ? "carouselRightImage"
                : activeSlide === 2
                ? "carouselActiveImage"
                : activeSlide === 3
                ? "carouselLeftImage"
                : "hideElement"
            }
            src={salads}
            alt="carousel"
          />
        </Link>
        <Link
          className={activeSlide === 3 ? "" : "disabledLink"}
          to={"sandwichs"}
        >
          <img
            className={
              activeSlide === 2
                ? "carouselRightImage"
                : activeSlide === 3
                ? "carouselActiveImage"
                : activeSlide === 4
                ? "carouselLeftImage"
                : "hideElement"
            }
            src={sandwichs}
            alt="carousel"
          />
        </Link>
        <Link
          className={activeSlide === 4 ? "" : "disabledLink"}
          to={"burgers"}
        >
          <img
            className={
              activeSlide === 3
                ? "carouselRightImage"
                : activeSlide === 4
                ? "carouselActiveImage"
                : activeSlide === 5
                ? "carouselLeftImage"
                : "hideElement"
            }
            src={burgers}
            alt="carousel"
          />
        </Link>
        <Link
          className={activeSlide === 5 ? "" : "disabledLink"}
          to={"breakfasts"}
        >
          <img
            className={
              activeSlide === 4
                ? "carouselRightImage"
                : activeSlide === 5
                ? "carouselActiveImage"
                : activeSlide === 6
                ? "carouselLeftImage"
                : "hideElement"
            }
            src={breakfasts}
            alt="carousel"
          />
        </Link>
        <img
          className={
            startCarousel
              ? "positionLeftArrow arrowsImageSize"
              : "positionLeftArrow arrowsImageSize cursorPointer"
          }
          src={startCarousel ? grayLeftArrow : leftArrow}
          alt="Left"
          onClick={() => {
            if (!startCarousel) decreaseActiveSlide();
          }}
        />
        <img
          className={
            startCarousel
              ? "positionRightArrow arrowsImageSize"
              : "positionRightArrow arrowsImageSize cursorPointer"
          }
          src={startCarousel ? grayRightArrow : rightArrow}
          alt="Right"
          onClick={() => {
            if (!startCarousel) increaseActiveSlide();
          }}
        />
        <img
          className="playPauseImage"
          src={startCarousel ? pauseSign : playSign}
          alt="Right"
          onClick={() => {
            setStartCarousel(!startCarousel);
          }}
        />
      </div>
    </div>
  );
}
