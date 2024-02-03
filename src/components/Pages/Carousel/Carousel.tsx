"use client";

import React, { useState, useEffect } from "react";
import CarouselItems from "./CarouselItems";
import { carousel } from "@/types/carouselTypes";

export default function Carousel() {
  const [carouselData, setCarouselData] = useState<carousel | null>(null);

  // Fetching carousel data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev-api.stage.in/v23/assignment/carousel-data"
        );
        const data = await response.json();
        setCarouselData(data.data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  /** @todo  add skeletal loader when data isnt available */

  if (!carouselData) return null;

  return <CarouselItems carouselData={carouselData} />;
}
