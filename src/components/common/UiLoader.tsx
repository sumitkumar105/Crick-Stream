import React from "react";

export default function UiLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/70">
      <div className="animate-spin rounded-full h-16 w-16 border-t-10 border-blue-500"></div>
    </div>
  );
}
