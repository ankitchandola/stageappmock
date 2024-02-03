/* eslint-disable @next/next/no-img-element */
// CarouselItems.js
import React from "react";
import useWindowDimensions from "@/components/Hooks/windowDimensionsHook";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carousel } from "@/types/carouselTypes";

type props = {
  carouselData: carousel;
};

export default function CarouselItems(props: props) {
  const { width } = useWindowDimensions();
  const { carouselData } = props;

  // Determine image ratio based on the window width
  const getRatioBasedOnWidth = () => {
    if (width < 600) {
      return "ratio1";
    } else if (width < 900) {
      return "ratio2";
    } else {
      return "ratio3";
    }
  };
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop
      interval={3000}
      transitionTime={2000}
      showStatus={false}
      showThumbs={false}
      autoFocus
      emulateTouch
    >
      {carouselData &&
        carouselData.carousel.map((item) => (
          <div key={item._id}>
            <img
              src={`${carouselData.rootUrl}/${item[getRatioBasedOnWidth()]}`}
              alt={`Image ${item._id}`}
              className="carousel-item"
            />
          </div>
        ))}
    </Carousel>
  );
}
