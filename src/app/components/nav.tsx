"use client";
import { Icon } from "@iconify/react";

export default function Nav() {
  return (
    <div className=" w-full flex justify-between items-center">
      <span className="flex-1 hover:underline cursor-pointer">العربيه</span>
      <img
        src="/images/Logo.png"
        className=" flex"
        style={{
          width: "200px",
        }}
      />
      <div className=" flex-1 flex items-center gap-4 justify-end">
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
