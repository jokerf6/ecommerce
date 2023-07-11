"use client";

import { Icon } from "@iconify/react";

export default function OrderUpdates() {
  return (
    <div className=" bg-slate-200 w-full px-2 py-3 rounded-md">
      <div className=" flex gap-1 items-center" dir="rtl">
        <Icon icon="mingcute:truck-fill" className=" text-lg" />
        <p> في الطريق اليك</p>
      </div>
      <p>
        اخر تحديث <span className=" font-bold">24 ابريل</span>
      </p>
    </div>
  );
}
