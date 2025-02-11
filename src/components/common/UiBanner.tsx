import React, { useState, useEffect } from "react";
import UiImage from "./UiImage";
import live from "../../assets/live.gif";
interface IProps {
  images: string[];
  interval: number;
}
export default function UiBanner({ images, interval }: IProps) {
  const [currIndex, setCurrIndex] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [images.length, interval]);
  return (
    <div className="relative">
      <UiImage
        src={images[currIndex]}
        alt="banner image"
        className="w-full h-full rounded-2xl shadow-lg object-cover "
      />
      <div className="text-red-500 rounded-full h-10 w-20 absolute top-0 right-1">
        <UiImage
          src={live}
          alt="live image"
          className="w-full h-full rounded-xl shadow-lg object-cover "
        />
      </div>
    </div>
  );
}
