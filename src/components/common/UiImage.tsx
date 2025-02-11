import React from "react";
import hero1 from "../../assets/hero1.jpg";
interface Iprops {
  src: string;
  alt?: string;
  className?: string;
}
export default function UiImage({ src, alt, className }: Iprops) {
  return <img src={src} alt={alt} className={className} />;
}
