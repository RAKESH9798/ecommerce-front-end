import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

function HomeSectionCarousel({data,sectionName}) {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.slice(0,10).map((item) => (
    <HomeSectionCard product={item}/>
  ));

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      carouselRef.current.slidePrev();
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < items.length - 1) {
      carouselRef.current.slideNext();
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="flex flex-items p-8 relative">
        <Button
          className="z-50"
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            color: "black", // Change arrow color to black
            display: currentIndex === 0 ? "none" : "block",
          }}
          aria-label="prev"
          onClick={handlePrevClick}
        >
          <ArrowBackIosIcon />
        </Button>
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          infinite
          responsive={responsive}
          mouseTracking
          touchTracking
          buttonsDisabled={true}
          ref={carouselRef}
          onSlideChanged={(e) => setCurrentIndex(e.item)}
        />
        <Button
          className="z-50"
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            color: "black", // Change arrow color to black
            display: currentIndex === items.length - 1 ? "none" : "block",
          }}
          aria-label="next"
          onClick={handleNextClick}
        >
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
