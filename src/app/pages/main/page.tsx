"use client";
import Image from "next/image";
import lofow from "../../../../public/images/logow.png" ;
import philo from "../../../../public/images/philosophy.webp"
import Video from "./video"
export default function Main() {
  return (
    <div>
      <div>
        <Video/>
      </div>
      <div className="flex  flex-col justify-center items-center rounded border-6 border-[#02327a] p-20 gap-12 sm:flex-row">
        <h1 className="font-bold text-4xl  border-r-4 border-[#EDCD1F]  p-4 ">ABOUT US</h1>
        <div className="md:text-lg sm: flex flex-col justify-center items-center ">
          <div>
          Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
          </div>
        </div>
      </div>


      <div className="bg-[#EDCD1F] gap-4 grid grid-cols-2 lg:flex lg:justify-center lg:items-center">
          <div className="flex justify-evenly items-center p-2 text-white font-bold lg:flex-col ">
            <div className="text-[70%] border-[#02327a] p-2 border-b-0 border-r-4 w-[70%] md:text-xl lg:border-b-4 lg:border-r-0 lg:w-[100%]">DEPARTMENTS </div>
            <div className="text-xl p-2 md:text-6xl">1000</div>
          </div>
          <div className="flex justify-evenly items-center p-2 text-white font-bold lg:flex-col ">
            <div className="text-[70%] border-[#02327a] p-2 border-b-0 border-r-4 w-[70%] md:text-xl lg:border-b-4 lg:border-r-0 lg:w-[100%]">YEARS OF EDUCATION</div>
            <div className="text-xl p-2 md:text-6xl">10</div>
          </div>
          <div className="flex justify-evenly items-center p-2 text-white font-bold lg:flex-col ">
            <div className="text-[70%] border-[#02327a] p-2 border-b-0 border-r-4 w-[70%] md:text-xl lg:border-b-4 lg:border-r-0 lg:w-[100%]">STUDENTS </div>
            <div className="text-xl p-2 md:text-6xl">1000</div>
          </div>
          <div className="flex justify-evenly items-center p-2 text-white font-bold lg:flex-col ">
            <div className="text-[70%] border-[#02327a] p-2 border-b-0 border-r-4 w-[70%] md:text-xl lg:border-b-4 lg:border-r-0 lg:w-[100%]">TEACHERS</div>
            <div className="text-xl p-2 md:text-6xl">10</div>
          </div>
      </div>
      <div className="pt-5 px-10 pb-5 gap-10 flex flex-col justify-between items-center xl:flex-row ">
        <div className="relative p-2  bg-[#02327a]/90 text-white rounded w-[100%] h-[100%] xl:h-[20rem] xl:w-[33.33%]">  
          <h1 className="flex justify-center items-center relative z-10 font-bold   border-b-4 border-[#EDCD1F] p-4 truncate text-2xl md:text-4xl ">SCHOOL PHILOSOPHY</h1>
          <div className="relative z-10 md:text-lg sm: flex flex-col justify-center items-center ">
            <div className=" h-64 overflow-y-auto p-2 flex justify-center items-center">
            Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
            </div>
          </div>
        </div>
        <div className="relative p-2  bg-[#02327a]/90 text-white rounded w-[100%] h-[100%] xl:h-[20rem] xl:w-[33.33%]">
          <h1 className="flex justify-center items-center relative z-10 font-bold   border-b-4 border-[#EDCD1F] p-4 truncate text-2xl md:text-4xl ">SCHOOL VISION</h1>
          <div className="md:text-lg sm: flex flex-col justify-center items-center ">
            <div className="h-64 overflow-y-auto p-2 flex justify-center items-center">
            Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
           
            </div>
          </div>
        </div>
        <div className="relative p-2  bg-[#02327a]/90 text-white rounded w-[100%] h-[100%] xl:h-[20rem] xl:w-[33.33%]">
          <h1 className="flex justify-center items-center relative z-10 font-bold   border-b-4 border-[#EDCD1F] p-4 truncate text-2xl md:text-4xl ">SCHOOL MISSION</h1>
          <div className=" flex flex-col justify-center items-center ">
            <div className="h-64 overflow-y-auto p-2 flex justify-center items-center">
            Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
            </div>
          </div>
        </div>
      </div>
    </div>

  );
  }