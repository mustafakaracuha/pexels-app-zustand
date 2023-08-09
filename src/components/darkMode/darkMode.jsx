import React from "react";
import { useStore } from "../../store/store";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

function DarkMode() {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="p-2 ml-2 transition duration-500 outline-none rounded-full"
      >
        {darkMode ? (
          <BsMoonStarsFill className={darkMode && "text-white"} size={25} />
        ) : (
          <BsSunFill size={25} />
        )}
      </button>
    </>
  );
}

export default DarkMode;
