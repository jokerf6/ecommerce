"use client";
import { types } from "@/util/static";
import { Icon } from "@iconify/react";
import React from "react";

export default function Custom({ filterBox, ShowFilterBox }: any) {
  const [display, changeDisplay] = React.useState("hidden");
  function showtypes() {
    display === "hidden" ? changeDisplay("absolute") : changeDisplay("hidden");
  }
  function change() {
    filterBox === "" ? ShowFilterBox("overflow-y-hidden") : ShowFilterBox("");
  }
  return (
    <div className=" z-20 w-full flex items-center justify-between mt-8">
      <div>
        <div
          className=" px-6 py-4 border rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => showtypes()}
        >
          <Icon icon="mingcute:down-line" />

          <h4>تي شيرت نص كوم</h4>
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
      <div className=" flex gap-2 cursor-pointer " onClick={() => change()}>
        <span>فلتر</span>

        <Icon icon={"octicon:filter-16"} />
      </div>
    </div>
  );
}
