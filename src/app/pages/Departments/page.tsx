"use client"
import Slider from "./slider"

export default function Departments() {
  return ( 
    <div id = "department_page">

      <div className="flex justify-center items-center flex-col h-[100%]">

        <div className="w-[100%] h-[100%]">
          <Slider />
        </div>
      </div>

    </div>
);
  }