import React, { useState, useEffect } from "react";
import banner1 from "../../assets/Home/banner1.jpg";
import banner2 from "../../assets/Home/banner2.jpg";
import banner3 from "../../assets/Home/banner3.jpg";

function HomeBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([banner1, banner2, banner3]);
  console.log(setImageUrls)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, imageUrls.length]);

  return (
    <div className="relative h-80 md:h-96">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Banner ${index}`}
          className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent opacity-50" />
    </div>
  );
}

export default HomeBanner;
