"use client"
import Slider from "./slider"

export default function Departments() {
  return ( 
    <div>

    <div className="flex justify-center items-center flex-col h-[100%]">
      <div>WHAT WE OFFER</div>
      <div className="w-[100%] h-[100%]">
        <Slider />
      </div>
    </div>

    </div>
);
  }