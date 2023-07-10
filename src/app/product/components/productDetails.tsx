"use client";
import { Icon } from "@iconify/react";
import React from "react";
export default function ProductDetails({ active }: any) {
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
  const [color, setColor] = React.useState("أزرق");
  const [size, setSize] = React.useState(0);
  const [num, setNum] = React.useState(1);

  function changeColor(col: string) {
    setColor(col);
  }
  function back() {
    setColor("أزرق");
  }
  function increae() {
    setNum(num + 1);
  }
  function decrese() {
    if (num > 1) setNum(num - 1);
  }
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  return (
    <div className=" w-full flex">
      <div className="w-1/2 mt-10 float-right  flex flex-col gap-4" dir="rtl">
        <h1 className=" text-2xl font-bold ">
          تيشيرت أولادى ظل أخضر تلبيس متناسب مع الجسم - أبيض
        </h1>
        <span className=" text-slate-400">LE 299.00</span>
        <p className=" underline cursor-pointer">تقيم المنتج</p>
        <span>{color}</span>
        <div className=" flex gap-2">
          <img
            src="/images/clothes1.jpg"
            className=" w-10 hover:opacity-60 cursor-pointer  border-4 border-black"
            onMouseEnter={() => changeColor("أزرق")}
            onMouseLeave={() => back()}
          />
          <img
            src="/images/clothes1.jpg"
            className=" w-10 hover:opacity-60 cursor-pointer"
            onMouseEnter={() => changeColor("أحمر")}
            onMouseLeave={() => back()}
          />
          <img
            src="/images/clothes1.jpg"
            className=" w-10 hover:opacity-60 cursor-pointer"
            onMouseEnter={() => changeColor("أصفر")}
            onMouseLeave={() => back()}
          />
          <img
            src="/images/clothes1.jpg"
            className=" w-10 hover:opacity-60 cursor-pointer"
            onMouseEnter={() => changeColor("رمادي")}
            onMouseLeave={() => back()}
          />
        </div>
        <span>
          Size: <span className=" font-bold ">{sizes[size]}</span>
        </span>
        <div className=" flex gap-2">
          {sizes.map((item, idx) => {
            return (
              <div
                onClick={() => setSize(idx)}
                className={`p-2 border-2 border-black cursor-pointer ${
                  size === idx ? "bg-black text-white" : ""
                } `}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div>
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
          <div className="flex mt-4 gap-2 items-center ">
            <div className=" w-3/4">
              <button className=" w-full bg-black border-2 border-black text-white p-2 hover:opacity-40">
                أضف الي السلة
              </button>
            </div>
            <div
              className=" flex gap-2  p-2 border-2 border-black hover:bg-slate-100 cursor-pointer"
              dir="rtl"
            >
              <span>شير</span>
              <Icon icon="bxs:share" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 flex items-center justify-center ">
        <img src={images[active]} />
      </div>
    </div>
  );
}
