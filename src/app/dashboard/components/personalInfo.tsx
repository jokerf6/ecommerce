"use client";
import { Icon } from "@iconify/react";
import Address from "./address";
import { Modal, Button } from "bootstrap-4-react";
import EditPersonal from "./editPersonal";
import AddAddress from "./addAddress";
import Info from "./info";
import Orders from "./orders";

export default function PersonalInfo() {
  return (
    <div className=" w-full text-center">
      <div className=" flex items-center justify-center relative">
        <h1 className=" w-full bg-slate-200 text-4xl">الملف الشخصي</h1>
        <Button
          primary
          data-toggle="modal"
          data-target="#exampleModal2"
          className=" bg-transparent text-black btn3"
        >
          <Icon icon="material-symbols:edit" className=" cursor-pointer" />
        </Button>{" "}
      </div>
      <Info />
      <div className=" mt-5">
        <div className=" flex items-center justify-center relative">
          <h1 className=" w-full bg-slate-200 text-4xl">العناوين</h1>
          <Button
            primary
            data-toggle="modal"
            data-target="#exampleModal3"
            className=" bg-transparent text-black btn3"
          >
            <Icon icon="fluent:add-12-filled" className=" cursor-pointer" />
          </Button>{" "}
        </div>
        <div className=" flex flex-wrap gap-2 mt-4 items-center justify-center">
          <Address />
        </div>
      </div>
      <Orders />
      <AddAddress />
      <EditPersonal />
    </div>
  );
}
