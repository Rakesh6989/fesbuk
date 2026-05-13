"use client";
import React from "react";
import Slider from "react-slick";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderProps = {
  children?: React.ReactNode;
  settings?: object;
  className?: string;
};
function NextArrow(props: any) {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-gray-100"
    >
      <ChevronRightIcon className="text-[32px]! text-gray-700!x`" />
    </button>
  );
}
function PrevArrow(props: any) {
  const { onClick, currentSlide } = props;

  if (currentSlide === 0) return null;

  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-gray-100"
    >
      <ChevronLeftIcon className="text-[32px]! text-gray-700!" />
    </button>
  );
}

function AppSlider({ children, settings, className }: SliderProps) {
  const defaultSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`relative ${className}`}>
      <Slider {...defaultSettings} {...settings}>
        {React.Children.map(children, (child) => (
          <div className="pr-2 py-3">{child}</div>
        ))}
      </Slider>
    </div>
  );
}

export default AppSlider;
