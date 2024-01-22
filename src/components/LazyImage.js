// LazyImage.js

import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, className, style }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(true);
    };

    // Clean up the event listener on component unmount
    return () => {
      image.onload = null;
    };
  }, [src]);

  return (
    <img
      className={`${className} ${imageLoaded ? "block" : "none"}`}
      src={imageLoaded ? src : ""}
      alt={alt}
      style={style}
      loading="lazy"
    />
  );
};

export default LazyImage;
