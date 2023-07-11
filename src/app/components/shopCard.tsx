"use client";
import { Icon } from "@iconify/react";
import React from "react";

export default function ShopCard() {
  const [num, setNum] = React.useState(1);

  function increae() {
    setNum(num + 1);
  }
  function decrese() {
    if (num > 1) setNum(num - 1);
  }
  return (
    <div dir="rtl" className=" flex gap-1">
      <div>
        <img
          src="/images/clothes1.jpg"
          style={{
            width: "150px",
            height: "150px",
          }}
        />
      </div>
      <div className=" flex flex-col gap-1">
        <p>تيشرت مطبوع عربي متفائل</p>
        <p>اخضر / M</p>
        <p>LE 123.00</p>
        <div className=" bg-white w-40 rounded-lg px-2 py-2  flex justify-between items-center border-2 border-black">
          <Icon
            icon="icon-park:plus"
            className=" text-xl cursor-pointer"
            onClick={() => increae()}
          />
          <span className=" text-2xl">{num}</span>
          <Icon
            icon="typcn:minus"
            className=" text-xl cursor-pointer"
            onClick={() => decrese()}
          />
        </div>
        <div className=" flex">
          <Icon
            icon="bxs:edit"
            className=" text-3xl cursor-pointer hover:text-blue-300"
          />
          <Icon
            icon="mdi-light:delete"
            className=" text-3xl hover:text-red-700 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
