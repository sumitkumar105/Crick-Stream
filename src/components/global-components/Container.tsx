import React from "react";

export default function Container({ children }) {
  return (
    <div className="container mx-auto justify-center items-center px-2">
      {children}
    </div>
  );
}
