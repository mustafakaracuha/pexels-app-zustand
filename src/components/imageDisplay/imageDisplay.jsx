import React, { useState } from "react";
import { useStore } from "../../store/store";

import MasonryGrid from "../masonry/masonryGrid";
import DarkMode from "../darkMode/darkMode";
import Search from "../search/search";

const ImageDisplay = () => {
  const { images, setImages, darkMode } = useStore();

  return (
    <div
      className={
        darkMode
          ? "flex w-full h-screen flex-col items-center justify-start p-14 transition duration-500 bg-black overflow-auto"
          : "flex w-full h-screen flex-col items-center justify-start p-14 transition duration-500 bg-white"
      }
    >
      <div className="w-full flex max-sm:flex-col items-start justify-between mb-5">
        <p className="w-full text-xl max-sm:text-[30px] max-sm:text-center max-sm:tracking-[4px] text-gray-500 font-bold max-sm:mb-5">
          <span className="text-indigo-400">Masonry Grid</span> Pexels
          <span className="font-light max-sm:hidden"> / Mustafa Karaçuha</span>
        </p>
        <div className="w-full items-center justify-end max-sm:flex flex">
          <Search setImages={setImages} />
          <DarkMode />
        </div>
      </div>
      {images.length > 0 ? <MasonryGrid /> : <p className={darkMode ? "text-gray-500": ""}>Lütfen tekrar deneyin</p>}
    </div>
  );
};

export default ImageDisplay;
