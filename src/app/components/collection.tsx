"use client";
import { clothes } from "@/util/static";
import { useState } from "react";
import { Icon } from "@iconify/react";
import React from "react";
import Points from "./points";
export default function Collection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [scrollDirection, setScrollDirection] = React.useState("");

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
    // setScrollLeft(scrollContainerRef.current!.scrollLeft);
    // console.log("bye");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }
    e.preventDefault();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const currentScrollPos = e.clientX;
    // console.log(currentScrollPos, prevScrollPos);
    if (currentScrollPos > prevScrollPos && prevScrollPos != 0) {
      setScrollDirection("right");
    } else if (currentScrollPos < prevScrollPos) {
      setScrollDirection("left");
    } else {
      setScrollDirection("");
    }

    setPrevScrollPos(currentScrollPos);

    // console.log(scrollDirection);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollDirection === "left") {
      if (index === clothes.length - 1) setInsex(0);
      else setInsex(index + 1);
    } else {
      if (index === 0) setInsex(clothes.length - 1);
      else setInsex(index - 1);
    }
    // console.log(scrollDirection);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // console.log("Leave");
  };

  const getCursorStyle = () => {
    return isDragging ? "grabbing" : "grab";
  };

  const [index, setInsex] = useState(3);
  return (
    <div className=" w-full flex-col justify-center items-center ">
      <div
        className={`w-full flex items-center justify-center cursor-grab`}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={clothes[index]}
          className=" w-full"
          style={{
            height: "550px",
          }}
        />
      </div>
      <Points index={index} />
    </div>
  );
}
