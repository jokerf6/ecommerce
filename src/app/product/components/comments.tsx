"use client";

import Card from "@/app/components/card";
import React, { useRef } from "react";
import CardComments from "./cardComment";
import { Icon } from "@iconify/react";

export default function Comments() {
  const allCards = [
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
    { rate: 10, content: "Lorem ipsum dolor sit" },
  ];
  const [active, setActive] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + 150,
        behavior: "smooth",
      });

      if (allCards.length - 1 > active) setActive(active + 1);
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
    <div className="flex justify-center items-center w-3/4  gap-2 h-1/2 xl:flex-row lg:flex-row md:flex-row flex-col">
      <div
        className=" border border-black py-4 px-4  h-fit rounded-full cursor-pointer xl:flex lg:flex md:flex hidden"
        onClick={handleScrollLeft}
      >
        <Icon icon={"ooui:next-rtl"} />
      </div>
      <div
        className=" flex overflow-x-scroll custom-scrollbar gap-4  items-center  h-96"
        style={{
          width: "1000px",
        }}
        ref={containerRef}
      >
        {allCards.map((item) => {
          return <CardComments />;
        })}
      </div>
      <div
        className="border border-black py-4 px-4  h-fit rounded-full cursor-pointer xl:flex lg:flex md:flex hidden"
        onClick={handleScrollRight}
      >
        <Icon icon={"ooui:next-ltr"} />
      </div>
      <div className=" flex gap-4">
        <div
          className=" border border-black py-4 px-4  h-fit rounded-full cursor-pointer xl:hidden lg:hidden md:hidden flex"
          onClick={handleScrollLeft}
        >
          <Icon icon={"ooui:next-rtl"} />
        </div>
        <div
          className="border border-black py-4 px-4  h-fit rounded-full cursor-pointer xl:hidden lg:hidden md:hidden flex"
          onClick={handleScrollRight}
        >
          <Icon icon={"ooui:next-ltr"} />
        </div>
      </div>
    </div>
  );
}
