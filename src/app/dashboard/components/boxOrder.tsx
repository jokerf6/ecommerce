import Back from "./back";
import OrderUpdates from "./orderUpdates";
import { Modal, Button } from "bootstrap-4-react";

export default function BoxOrder() {
  return (
    <div className=" w-96 border-2 px-4 py-4 rounded-md cursor-pointer hover:shadow-xl duration-200">
      <OrderUpdates />
      <img
        src="/images/clothes1.jpg"
        style={{
          width: "300px",
          height: "300px",
        }}
      />
      <h2 className=" text-lg text-slate-400" dir="rtl">
        1 منتج
      </h2>
      <h2>123 LE</h2>
      <div className=" flex gap-2 justify-center items-center">
        <Button
          primary
          data-toggle="modal"
          data-target="#exampleModal5"
          className=" bg-transparent text-black btn4"
        >
          طلب استرجاع
        </Button>{" "}
        <button className=" bg-black text-white p-2 border-black border-2  ">
          شراء مره اخري
        </button>
      </div>
      <Back />
    </div>
  );
}
