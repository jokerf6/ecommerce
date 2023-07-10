"use client";
import React from "react";
import Card from "../components/card";
import Collection from "../components/collection";
import Nav from "../components/nav";
import Types from "../components/types";
import Current from "./components/current";
import Custom from "./components/custom";
import Filter from "./components/filter";

export default function Collections() {
  const [filterBox, ShowFilterBox] = React.useState("");
  function overlap() {
    return filterBox === "" ? "-z-20 opacity-0" : "z-10 opacity-25";
  }
  return (
    <div className={`${filterBox} w-full `}>
      <div className=" px-20 py-5 h-screen">
        <Nav />
        <hr className="mt-2" />
        <Types />
        <Current />
        <Custom filterBox={filterBox} ShowFilterBox={ShowFilterBox} />
        <div className=" z-0 flex gap-2 flex-wrap justify-center items-center mt-5 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Filter filterBox={filterBox} ShowFilterBox={ShowFilterBox} />
      </div>

      <div
        className={` bg-black top-0 ${overlap()}  w-full h-screen  absolute`}
        style={{
          transition: "1s ease-in-out",
        }}
      ></div>
    </div>
  );
}
