"use client";
import React from "react";
import ReactStars from "react-stars";

export default function StarRating2() {
  return (
    <div>
      <ReactStars
        count={5}
        size={32}
        color2={"#e7711b"}
        color1="#ccc"
        half={false}
      />
    </div>
  );
}
