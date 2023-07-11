"use client";
import Image from "next/image";
import Nav from "./components/nav";
import Types from "./components/types";
import Collection from "./components/collection";
import Points from "./components/points";
import Persons from "./components/persons";
import BreaK from "./components/break";
import Best from "./components/best";
import Subscripe from "./components/subscribe";
import React from "react";
import Shop from "./components/shop";

export default function Home() {
  const [shopBox, ShowShopBox] = React.useState("");
  function overlap() {
    return shopBox === "" ? "-z-20 opacity-0" : "z-10 opacity-25";
  }
  function overlap2() {
    return shopBox !== "" ? " overflow-y-hidden" : "";
  }
  console.log("ssssss");
  console.log(shopBox);
  return (
    <main className={`flex flex-col gap-16`}>
      <div className=" w-full h-screen overflow-y-hidden">
        <div className="py-5 bg-custom bg-cover bg-center w-full h-full px-20">
          <Nav shopBox={shopBox} ShowShopBox={ShowShopBox} />
          <hr className=" mt-2" />
          <Types />
          <Collection />
        </div>
      </div>
      {shopBox === "" ? (
        <div>
          <div className=" w-full text-center mt-8 flex flex-col justify-center items-center">
            <h1 className=" mb-8 text-3xl">أقسام قد تعجبك</h1>
            <Persons />
          </div>

          <BreaK />
          <Best />
          <Subscripe />
        </div>
      ) : undefined}{" "}
      <Shop shopBox={shopBox} ShowShopBox={ShowShopBox} />
      <div
        className={` bg-black top-0 ${overlap()}  w-full h-screen  absolute`}
        style={{
          transition: "1s ease-in-out",
        }}
      ></div>
    </main>
  );
}
