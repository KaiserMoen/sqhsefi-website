"use client"
import Image from "next/image";

import philo from "../../../../public/images/philosophy.webp"
export default function SeniorHighSlide() {
  return ( 
    <div className="relative  z-0 flex justify-center items-center h-[100%] w-[100%]">
        <div>
            <div>
                <Image
                    src={philo}
                    alt="Background Image"
                    quality={100}
                    fill
                    className="object-cover"
                ></Image>
            </div>
        </div>
        <div className="text-white w-[100%]  flex-col z-10  ">
            <div className="flex justify-start flex-col w-[50%] bg-[rgba(0,0,0,0.5)] rounded p-20">
               <div className="text-4xl font-bold p-2 z-10  md:text-6xl lg:text-8xl border-b-4 border-[#EDCD1F]">
                SENIOR HIGH
                </div>
                <div  className=" font-bold p-2 z-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum iste placeat velit quod incidunt assumenda unde animi totam voluptates quae! Corporis voluptatum, quam maxime quibusdam placeat libero natus architecto distinctio.
                </div> 
                <div>
                    We offer the following for Grade 11 - 12:
                    <p>STEM</p>
                    <p>ABM</p>
                    <p>HUMMS</p>
                    <p>GAS</p>
                </div>
            </div>
            
        </div>
    </div>
);
  }