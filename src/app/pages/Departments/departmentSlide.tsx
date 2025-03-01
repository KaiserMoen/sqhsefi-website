"use client"
import Image from "next/image";

import philo from "../../../../public/images/philosophy.webp"
export default function DepartmentSlide() {
  return ( 
    <div className="relative  z-0 flex justify-center items-center h-[100%] w-[100%] ">
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
        <div className="text-white z-10 p-10 ">
            <div className="text-4xl font-bold p-2 z-10 md:text-8xl border-b-4 border-[#EDCD1F]">
            DEPARTMENTS
            </div>
            <div  className="w-[60%] font-bold p-2 z-10 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum iste placeat velit quod incidunt assumenda unde animi totam voluptates quae! Corporis voluptatum, quam maxime quibusdam placeat libero natus architecto distinctio.
            </div>
        </div>
    </div>
);
  }