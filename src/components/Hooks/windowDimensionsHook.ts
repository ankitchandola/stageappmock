// useWindowDimensions Hook
// A custom React Hook to track and retrieve the dimensions of the window.
// Returns an object containing the width and height.

import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { clientWidth: width, clientHeight: height } = document.documentElement;;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}