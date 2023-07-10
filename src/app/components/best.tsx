"use client";
import { useRef } from "react";

import { Icon } from "@iconify/react";
import Card from "./card";
export default function Best() {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + container.offsetWidth,
        behavior: "smooth",
      });

      console.log(container.scrollLeft);
    }
  };
  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - container.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className=" w-full h-96 flex mb-52 lg:px-32 xl:px-32 md:px-10 sm:px-4  flex-col  items-center gap-16 ">
      <h1 className=" text-4xl font-bold">الافضل مبيعا</h1>
      <div className=" w-full gap-16 flex flex-col">
        <div className="  justify-between items-center w-full hidden lg:flex xl:flex md:flex">
          <button className=" bg-black text-white p-4">عرض الكل</button>

          <div className=" flex gap-8">
            <span className=" hover:underline cursor-pointer">كل المنتجات</span>
            <span className=" hover:underline  cursor-pointer">تيشرتات</span>
            <span className=" hover:underline  cursor-pointer">هوديز</span>
            <span className=" hover:underline  cursor-pointer">أحذية</span>
          </div>
        </div>
        <div className=" flex items-center gap-4">
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div
            className="border border-black py-4 px-4  h-fit rounded-full cursor-pointer "
            onClick={handleScrollRight}
          >
            <Icon icon={"ooui:next-ltr"} />
          </div>
        </div>
      </div>
    </div>
  );
}
