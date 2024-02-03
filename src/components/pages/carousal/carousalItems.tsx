/* eslint-disable @next/next/no-img-element */
// CarouselItems.js
import React from "react";
import { carousel } from "./carousal";
import useWindowDimensions from "@/components/hooks/windowDimensionsHook";

type props = {
    carouselData: carousel
};

export default function CarouselItems(props: props) {
    const { width } = useWindowDimensions()
    const { carouselData } = props;
    const getRatioBasedOnWidth = () => {
        if (width < 600) {
            return 'ratio1';
        } else if (width < 900) {
            return 'ratio2';
        } else {
            return 'ratio3';
        }
    };
    console.log(getRatioBasedOnWidth(), "hmm", width);
    return (
        <div className="carousel">
            {carouselData && carouselData.carousel.map((item) => (
                <div key={item._id} className="carousel-item">
                    <img
                        src={`${carouselData.rootUrl}/${item[getRatioBasedOnWidth()]}`}
                        alt={`Image ${item._id}`}
                    />
                </div>
            ))}
        </div>
    );
}
