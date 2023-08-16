import React, { useState, useEffect } from "react";
import { useStore } from "../../store/store";

import MasonryGrid from "../masonry/masonryGrid";
import DarkMode from "../darkMode/darkMode";
import Search from "../search/search";
import { fetchRandom } from "../../utils/api";

import { FaArrowUp } from 'react-icons/fa';


const ImageDisplay = () => {
  const { images, setImages, darkMode } = useStore();
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1)


  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      setPage(prevPage => prevPage + 1);
    }
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  useEffect(() => {
    fetchRandomImages()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);


  const fetchRandomImages = async () => {
    try {
      const randomImages = await fetchRandom(page);
      setImages([...images, ...randomImages])
    } catch (error) {
      console.error("Error fetching random images:", error);
    }
  };


  return (
    <> 
      <div className="w-full flex max-sm:flex-col items-start justify-between mb-5">
        <p className="w-full text-xl max-sm:text-[30px] max-sm:text-center cursor-pointer max-sm:tracking-[4px] text-gray-500 font-bold max-sm:mb-5">
          <span className="text-indigo-400">Masonry Grid</span> Pexels
          <span className="font-light max-sm:hidden"> / Mustafa Karaçuha</span>
        </p>
        <div className="w-full items-center justify-end max-sm:flex flex">
          <Search setImages={setImages} />
          <DarkMode />
        </div>
      </div>
      {images.length > 0 ? <MasonryGrid /> : <p className={darkMode ? "flex w-full h-screen items-center justify-center text-gray-500 overflow-hidden": "flex w-full h-screen items-center justify-center text-gray-500 overflow-hidden"}>Lütfen tekrar deneyin</p>}
      {showButton && <button onClick={scrollToTop} className={darkMode ? "sticky bottom-5 p-6 bg-[#242424] opacity-90 shadow-xl rounded-full transition-all duration-300 active:scale-110 hover:scale-105" : "sticky bottom-5 p-6 bg-white shadow-xl opacity-90 rounded-full transition-all duration-300 active:scale-110 hover:scale-105"}><FaArrowUp className={darkMode ? "text-indigo-400": "text-indigo-400"} size={27}/></button>}
    </> 
  );
};
export default ImageDisplay;
