"use client";
import React from "react";
import Albume from "./albume";
import ProductDetails from "./productDetails";

export default function Collect() {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <ProductDetails active={active} />
      <Albume active={active} setActive={setActive} />
    </div>
  );
}
