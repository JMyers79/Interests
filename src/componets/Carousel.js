import React, { useState } from "react";
import "../App.css";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div className="absolute left-4 bottom-4 text-white p-2 bg-black bg-opacity-40 rounded">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-sm opacity-90">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded"
                aria-label="Previous slide"
            >
                Prev
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded"
                aria-label="Next slide"
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;