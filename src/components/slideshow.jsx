import { useState } from "react";

const Slideshow = ({ image1, image2, image3 }) => {
  const images = [image1, image2, image3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length); 
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="w-[80%] h-[700px] overflow-hidden relative mx-auto">

      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full flex-shrink-0 h-full object-cover rounded-[4px]"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-pink-300/50 hover:bg-pink-400/70 p-3 rounded-full transition-colors duration-200 cursor-pointer"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-pink-300/50 hover:bg-pink-400/70 p-3 rounded-full transition-colors duration-200 cursor-pointer"
      >
        ›
      </button>
    </div>
  );
};

export default Slideshow;