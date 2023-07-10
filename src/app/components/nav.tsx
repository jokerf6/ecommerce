"use client";
import { Icon } from "@iconify/react";
import React from "react";

export default function Nav() {
  const [display, changeDisplay] = React.useState("hidden");
  function change() {
    display === "hidden" ? changeDisplay("flex") : changeDisplay("hidden");
  }
  return (
    <div className=" w-full flex justify-between items-center">
      <span className="hover:underline cursor-pointer flex-1  hidden xl:flex lg:flex md:flex">
        العربيه
      </span>
      <img
        src="/images/Logo.png"
        className=" flex"
        style={{
          width: "200px",
        }}
      />
      <div className=" flex flex-col gap-2 relative">
        <Icon
          icon={"fluent-mdl2:secondary-nav"}
          className=" text-3xl font-bold cursor-pointer xl:hidden  lg:hidden md:hidden"
          onClick={() => change()}
        />
        <div
          className={`${display}  flex-col bg-white gap-2 absolute top-10 px-8 py-4 right-0`}
        >
          <span>الحساب</span>
          <hr />
          <span>التسوق</span>
        </div>
      </div>
      <div className=" flex-1  items-center gap-4 justify-end hidden xl:flex lg:flex md:flex">
        <div className=" flex items-center gap-1 justify-center">
          <Icon icon={"maki:shop"} className="  text-xl" />
          <span className=" text-xl hover:underline cursor-pointer">تسوق</span>
        </div>
        <div className=" flex items-center gap-1 justify-center">
          <Icon icon={"iconamoon:profile-fill"} className="  text-xl" />
          <span className=" text-xl hover:underline cursor-pointer">
            الحساب
          </span>
        </div>
      </div>
    </div>
  );
}
