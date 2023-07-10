"use client";

import { filters } from "@/util/static";
import { Icon } from "@iconify/react";
import React from "react";

export default function Filter({ filterBox, ShowFilterBox }: any) {
  const [title, setTitle] = React.useState(true);
  const [main, setMain] = React.useState("فلتر وترتيب");
  const [checkList, setCheckList] = React.useState<number[]>([]);

  function overlap() {
    return filterBox === "" ? "-right-1/4" : "right-0";
  }
  function change() {
    filterBox === "" ? ShowFilterBox("overflow-y-hidden") : ShowFilterBox("");
    setTitle(true);
  }

  function change2() {
    setTitle(true);
    setMain("فلتر وترتيب");
  }
  function changeMain(e: any) {
    setMain(e);

    setTitle(false);
  }
  function changeBox(idx: number) {
    const arr = checkList.slice();
    if (arr.includes(idx)) {
      const newArray = arr.filter((item) => item !== idx);
      setCheckList(newArray);
    } else {
      arr.push(idx);
      setCheckList(arr);
    }
  }
  return (
    <div
      className={`z-20 bg-white shadow-lg w-1/4 top-0 flex  absolute h-screen p-4 ${overlap()} flex-col  gap-8 pt-8`}
      style={{
        transition: "1s ease-in-out",
      }}
    >
      <div className=" flex justify-center items-center">
        {!title ? (
          <Icon
            icon="ep:back"
            className=" text-4xl absolute left-2 cursor-pointer"
            onClick={() => change2()}
          />
        ) : undefined}
        <h1 className=" text-3xl">{main}</h1>
        <Icon
          icon="octicon:x-24"
          className=" text-4xl absolute right-2 cursor-pointer"
          onClick={() => change()}
        />
      </div>
      {title ? (
        <div className=" flex flex-col">
          {filters.map((item) => {
            return (
              <div
                className=" flex flex-row-reverse justify-between items-center p-4 cursor-pointer hover:shadow-lg"
                onClick={(e) => changeMain(item.title)}
              >
                <span className=" text-xl">{item.title}</span>
                <Icon icon={"ep:right"} className=" text-2xl" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" flex flex-col">
          {filters[0]["subTitle"].map((item: any, idx: number) => {
            return (
              <div
                className={`${
                  checkList.includes(idx) ? "bg-slate-100" : "bg-transparent"
                } flex flex-row-reverse justify-between items-center p-4 cursor-pointer hover:bg-slate-100`}
                onClick={() => changeBox(idx)}
              >
                <span className=" text-md">{item}</span>
                <input
                  type="checkbox"
                  checked={checkList.includes(idx)}
                  className="form-checkbox h-5 w-5  text-indigo-100 transition duration-150 ease-in-out cursor-pointer bg-slate-100"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
