import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, content: "Security and safety" },
    { id: 2, content: "Technology" },
    { id: 3, content: "Meet your avatar" },
    { id: 4, content: "Plan your visit" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < items.length - 1 ? prevIndex + 1 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel box-border mt-12 flex flex-col items-center justify-center p-4">
      <div className="carousel-container flex overflow-hidden w-full justify-center items-center space-x-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item flex-shrink-0 w-1/5 p-4 m-2 border rounded-lg text-white transform transition-transform duration-500 ease-in-out -skew-x-12 ${
              currentIndex === index ? "scale-10" : "scale-100"
            }`}
          >
            <p className="text-center -skew-x-12">{item.content}</p>
            {currentIndex === index && (
              <div className="flex justify-center mt-4">
                {" "}
                {/* Added margin-top */}
                <button className="bg-orange2 text-white px-4 py-2 rounded">
                  More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
