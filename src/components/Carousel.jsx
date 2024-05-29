import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const images = [
    "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F188282b4-2b21-4a92-b297-2e5163768e07&w=1200&q=75",
    "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F2edd9920-1b42-4e3f-9491-a2359a08d334&w=1200&q=75",
    "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F38f4d403-3329-4b45-bd4f-21ee31f30e03&w=1200&q=75",
    "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feedc6ad0-1c3c-40fb-a3f2-15b807b7ed30&w=1200&q=75",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex); // Save previous index
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeIndex, images.length]);

  const before = () => {
    setPrevIndex(activeIndex);
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const next = () => {
    setPrevIndex(activeIndex);
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  const dottedClick = (index) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto p-4 max-w-[1240px] rounded-[30px] overflow-hidden relative">
      <div className="max-w-[1240px] rounded-[30px] relative overflow-hidden h-[500px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover flex-shrink-0 rounded-[20px]"
            />
          ))}
        </div>
        <button
          onClick={before}
          className="w-[50px] h-[50px] absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none z-10"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={next}
          className="w-[50px] h-[50px] absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none z-10"
        >
          <ChevronRightIcon />
        </button>
      </div>
      <div className="absolute bottom-10 rounded-[30px] left-0 right-0 flex justify-center z-10 mt-50">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-2 bg-white rounded-full cursor-pointer ${
              index === activeIndex ? "bg-black" : ""
            } ${
              index === prevIndex && index !== activeIndex ? "opacity-50" : ""
            }`}
            onClick={() => dottedClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
