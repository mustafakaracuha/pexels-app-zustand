import React from "react";
import Masonry from "react-masonry-css";
import { CgSpinner } from "react-icons/cg";
import { useStore } from "../../store/store";

function masonryGrid() {
  const { images } = useStore();

  const breakpointColumnsObj = {
    default: 7,
    1100: 5,
    700: 2,
    500: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image) => (
        <div
          key={image.id}
          onClick={() => window.open(image.src.original, "_blank")}
          className={`image-item mb-4 relative rounded-xl cursor-pointer p-2 bg-[${image.avg_color}]`}
        >
          <img
            src={image.src.medium}
            alt={image.photographer}
            className="w-full h-auto rounded-md shadow-md image transition-all duration-300 lg:hover:scale-105"
          />
          <p className="text-md text-gray-500 mt-3">{image.photographer}</p>
        </div>
      ))}
    </Masonry>
  );
}

export default masonryGrid;
