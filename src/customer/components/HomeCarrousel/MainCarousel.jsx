import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const items = MainCarouselData.map((item) => (
  <img
    className="curser-pointer"
    role="presentation"
    src={item.image}
    alt=""
  ></img>
));

const MainCarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    controlsStrategy="alternate"
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);

export default MainCarousel;
