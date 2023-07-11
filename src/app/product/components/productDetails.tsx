"use client";
import { Icon } from "@iconify/react";
import React from "react";
import { Modal, Button } from "bootstrap-4-react";

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
    <div className=" w-full flex flex-col-reverse xl:flex-row lg:flex-row md:flex-row">
      <div
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full mt-10 float-right  flex flex-col gap-4"
        dir="rtl"
      >
        <h1 className=" text-2xl font-bold w-fit" dir="rtl">
          تيشيرت أولادى ظل أخضر تلبيس متناسب مع الجسم - أبيض
        </h1>
        <span className=" text-slate-400 w-fit">LE 299.00</span>
        <Button
          primary
          data-toggle="modal"
          data-target="#exampleModal"
          className=" bg-transparent text-black btn2"
        >
          تقييم المنتج
        </Button>{" "}
        <span className="w-fit">{color}</span>
        <div className=" flex gap-2">
          <img
            src="/images/clothes1.jpg"
            className=" w-10 opacity-60 cursor-pointer"
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
        <span className="w-fit">
          Size: <span className=" font-bold w-fit">{sizes[size]}</span>
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
      <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex items-center justify-center ">
        <img src={images[active]} />
      </div>
    </div>
  );
}
