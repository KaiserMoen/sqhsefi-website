"use client"
import Image from "next/image";
import test from "../../../../public/images/test.png"
import philo from "../../../../public/images/philosophy.webp"
import Slider from "./slider"

export default function Departments() {
  return ( 
    <div>

    <div className="flex justify-center items-center h-[100%] bg-gray-100">
      <div className="w-[100%] h-[100%]">
        <Slider />
      </div>
    </div>

    </div>
);
  }