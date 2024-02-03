// Carousel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import CarouselItems from './carousalItems';

export type carousel = {

    rootUrl: string;
    carousel: Array<{
        _id: string;
        ratio1: string;
        ratio2: string;
        ratio3: string;
    }>;

}

export default function Carousel() {
    const [carouselData, setCarouselData] = useState<carousel | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dev-api.stage.in/v23/assignment/carousel-data');
                const data = await response.json();
                setCarouselData(data.data);
            } catch (error) {
                console.error('Error fetching carousel data:', error);
            }
        };

        fetchData();
    }, []);


    if (!carouselData) return null

    return <CarouselItems carouselData={carouselData} />;
}
