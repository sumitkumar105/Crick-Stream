import React from "react";
import { IconProps } from "../../config/IUiSvg.ts";
export default function UiSvg({
  height,
  width,
  color,
  path,
  viewBox,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox ? viewBox : "0 0 24 24"}
      fill={color}
      onClick={onClick}
    >
      <path d={path}></path>
    </svg>
  );
}
