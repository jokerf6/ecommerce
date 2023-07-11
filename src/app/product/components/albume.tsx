"use client";
import { Icon } from "@iconify/react";
import React, { useRef } from "react";
export default function Albume({ active, setActive }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const images = [
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
    "/images/clothes1.jpg",
  ];
  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + 150,
        behavior: "smooth",
      });

      if (images.length - 1 > active) setActive(active + 1);
    }
  };
  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - 150,
        behavior: "smooth",
      });
      if (active > 0) setActive(active - 1);
    }
  };

  return (
    <div className=" flex items-center justify-center gap-2 mt-5">
      <div
        className="border border-black py-4 px-4  h-fit rounded-full cursor-pointer"
        onClick={handleScrollLeft}
      >
        <Icon icon={"ooui:next-rtl"} />
      </div>
      <div
        className=" flex overflow-x-scroll custom-scrollbar gap-4  items-center"
        ref={containerRef}
      >
        {images.map((item, idx) => {
          return (
            <img
              src={item}
              className={` w-40  ${active === idx ? " opacity-60" : ""}`}
            />
          );
        })}
      </div>
      <div
        className="border border-black py-4 px-4  h-fit rounded-full cursor-pointer "
        onClick={handleScrollRight}
      >
        <Icon icon={"ooui:next-ltr"} />
      </div>
    </div>
  );
}
