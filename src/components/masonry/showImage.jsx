import React from 'react'

function ShowImage({image,setSelectedImage}) {
  return (
    <div
    key={image.id}
    onClick={() => setSelectedImage(image.src.large2x)}
    className={`image-item mb-4 relative rounded-xl cursor-pointer p-1 bg-[${image.avg_color}]`}
  >
    <img
      src={image.src.medium}
      alt={image.photographer}
      className="w-full h-auto rounded-md shadow-md image transition-all duration-300 lg:hover:scale-105"
    />
    <p className="text-md text-gray-500 mt-3">{image.photographer}</p>
  </div>
  )
}

export default ShowImage
