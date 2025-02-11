import React from "react";

export default function Error() {
  return (
    <div className=" flex justify-center items-center mx-auto mt-2 mb-2 border-none  outline:none shadow-lg rounded bg-gray-200 h-[300px] w-[300px]">
      <div className="flex flex-col items-center  justify-center gap-2">
        <h2>404</h2>
        <p>Some thing went Wrong!!!</p>
        <button className="px-2 py-2 bg-indigo-600 text-white font-semibold text-sm rounded">
          Go Back
        </button>
      </div>
    </div>
  );
}
