"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import ss1 from "@/assets/ss-1.jpg";
import ss2 from "@/assets/ss-2.jpg";
import ss3 from "@/assets/ss-3.jpg";
import ss4 from "@/assets/ss-4.jpg";
import ss5 from "@/assets/ss-5.jpg";

const images = [
  { image: ss1 },
  { image: ss2 },
  { image: ss3 },
  { image: ss4 },
  { image: ss5 },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            className={index === currentImageIndex ? "active" : ""}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        ))}
      </div>
      <div>
        <div className="overlay-main-text text-6xl md:text-6xl lg:text-8xl xl:text-9xl text-yellow font-bold">
          FEEL GOOD ABOUT YOUR FOOD
        </div>
        <div className="uppercase text-white overlay-text">
          <p>FOOD WITH THOUGHT?</p>
          <p>3659 Mireya Green, Georgebury, AL 41350</p>
        </div>
      </div>
    </div>
  );
}
