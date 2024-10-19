"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Fresh Pizza, Crispy And Hot.",
    image: "/myslide3.jpg",
  },
  {
    id: 2,
    title: "Guaranteed prompt food Delivery in N.W. London.",
    image: "/myslide2.jpg",
  },
  {
    id: 3,
    title: "Pizza to share with your family.",
    image: "/myslide1.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      <div className="bg-amber-200 flex-1 flex items-center justify-center flex-col gap-8 text-blue-800 font-bold">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-[60px] font-serif">
          {data[currentSlide].title}
        </h1>
        <button className="bg-yellow-500 text-white py-4 px-8 rounded-md">
          Order Now
        </button>
      </div>

      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
