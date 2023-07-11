"use client";
import { Icon } from "@iconify/react";
import EditAddress from "./editAddress";
import { Modal, Button } from "bootstrap-4-react";

export default function Address() {
  return (
    <div className=" gap-2 w-52 shadow-lg py-4 px-2 flex flex-col " dir="rtl">
      <div className=" flex justify-center items-center relative cursor-pointer">
        <Button
          primary
          data-toggle="modal"
          data-target="#exampleModal4"
          className=" bg-transparent text-black btn3"
        >
          <Icon icon="material-symbols:edit" className=" cursor-pointer" />
        </Button>{" "}
        <p>العنوان 1</p>
      </div>

      <h5 className=" font-bold">فهد عبد الحكيم سعيد</h5>
      <p className=" mb-0">
        1 شارخ خاتم المرسلين مدينه النجوم بولاق الدكرور - نزله الرشاح من علي
        الدائري
      </p>
      <p className=" mb-0">Egypt</p>
      <p className=" mb-0">01148478628</p>
      <EditAddress />
    </div>
  );
}
