"use client";

import { filters } from "@/util/static";
import { Icon } from "@iconify/react";
import React from "react";
import ShopCard from "./shopCard";

export default function Shop({ shopBox, ShowShopBox }: any) {
  console.log("hi");
  console.log(shopBox);
  const [title, setTitle] = React.useState(true);
  const [main, setMain] = React.useState("فلتر وترتيب");
  const [checkList, setCheckList] = React.useState<number[]>([]);

  function overlap() {
    return shopBox === "" ? "-right-1/4" : "right-0";
  }
  function change() {
    shopBox === "" ? ShowShopBox("overflow-y-hidden") : ShowShopBox("");
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
      className={`z-20 bg-white shadow-lg w-1/4 top-0 flex  absolute  h-full  p-4 ${overlap()} flex-col  gap-8 pt-8 flex justify-between`}
      style={{
        transition: "1s ease-in-out",
      }}
    >
      <div style={{ height: "80%" }}>
        <div className=" flex justify-center items-center mb-5">
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
        <hr />
        <div
          className="  flex flex-col gap-4 mt-5 overflow-auto"
          style={{
            height: "95%",
          }}
        >
          <ShopCard />
          <hr />
          <ShopCard />
          <hr /> <ShopCard />
          <hr /> <ShopCard />
          <hr /> <ShopCard />
          <hr /> <ShopCard />
          <hr /> <ShopCard />
          <hr /> <ShopCard />
          <hr /> <ShopCard />
          <hr />
        </div>
      </div>
      <div className=" flex gap-2 flex-col">
        <div className="flex justify-between items-center w-full" dir="rtl">
          <p className=" text-xl">الاجمالي:</p>
          <p className=" text-xl">LE 349.00 </p>
        </div>
        <button className=" w-full bg-black p-2 text-white"> أدفع الان </button>
      </div>
    </div>
  );
}
