import { Icon } from "@iconify/react";
import OrderUpdates from "./orderUpdates";
import BoxOrder from "./boxOrder";

export default function Orders() {
  return (
    <div className=" w-full  text-center mt-4">
      <h1 className=" w-full bg-slate-200"> طلبات</h1>
      <div className=" flex flex-wrap justify-center items-center py-8 ">
        <BoxOrder />
      </div>
    </div>
  );
}
