"use client";
import { types } from "@/util/static";
import { Icon } from "@iconify/react";
import React from "react";

export default function Types() {
  const [display, changeDisplay] = React.useState("hidden");
  function showtypes() {
    display === "hidden" ? changeDisplay("absolute") : changeDisplay("hidden");
  }
  return (
    <div className=" justify-center items-center py-6  gap-8 flex ">
      {types.map((item) => {
        return (
          <div className=" xl:text-xl lg:text-lg md:text-sm sm:text-xs text-xs  hover:underline cursor-pointer hidden lg:block xl:block md:block">
            {item}
          </div>
        );
      })}
      <div>
        <div
          className=" px-6 py-4 border rounded-lg  items-center justify-center gap-2 cursor-pointer xl:hidden lg:hidden md:hidden flex "
          onClick={() => showtypes()}
        >
          <Icon icon="mingcute:down-line" />

          <h4 className=" text-xl">تي شيرت نص كوم</h4>
        </div>
        <div
          className={` z-20 flex flex-col px-8 py-2 h-72 shadow-lg  bg-white ${display} justify-start items-start`}
        >
          {types.map((item) => {
            return (
              <span className=" p-2 flex flex-row-reverse w-full cursor-pointer hover:underline">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
