"use client";
import Image from "next/image";
import Seameo from "../../../../public/images/seameo.png" ;
import Apscu from "../../../../public/images/apscu.png";
import Peac from "../../../../public/images/peac.jpg" ;
import Prof from "../../../../public/images/professor.webp";
import Video from "./video";
export default function Main() {
  return (
    <div>
      <div>
        <Video/>
      </div>
      <div className="flex  flex-col justify-center items-center rounded border-6 border-[rgb(2,50,122)] p-20 gap-12 sm:flex-row">
        <h1 className="font-bold text-4xl  border-r-4 border-[#EDCD1F]  p-4 lg:text-6xl">ABOUT US</h1>
        <div className="md:text-xl sm: flex flex-col ">
          <div>
          <b>Established in 1945</b>, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
          </div>
          <div className="gap-4 grid grid-cols-2 lg:grid lg:grid-cols-4  pt-10">
              <div className="flex justify-evenly p-2  font-bold  flex-col">
                <div className="text-lg md:text-4xl">1000+</div>
                <div className="text-[70%]">DEPARTMENTS </div>
              </div>
              <div className="flex justify-evenly p-2  font-bold  flex-col">
                <div className="text-lg md:text-4xl">10</div>
                <div className="text-[70%]">YEARS OF EDUCATION</div>
              </div>
              <div className="flex justify-evenly p-2  font-bold  flex-col">                
                <div className="text-lg md:text-4xl">1000</div>
                <div className="text-[70%]">STUDENTS </div>
              </div>
              <div className="flex justify-evenly p-2  font-bold  flex-col">                 
                <div className="text-lg md:text-4xl">10</div>
                <div className="text-[70%]">TEACHERS</div>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(220,220,221)] p-2 md:p-10">
        <div className="flex justify-center items-center flex-col p-2 ">
          <h1 className="text-4xl flex justify-center items-center p-4 font-bold">LOOK INTO OUR VALUES</h1>
          <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa animi rem a ut omnis at dolore illo maxime ea praesentium adipisci distinctio voluptatibus cupiditate numquam, unde neque, ipsa illum?</p>
        </div>
        <div className="pt-5 px-2 pb-5 flex  flex-col  lg:grid lg:grid-cols-3 gap-2 ">
          <div className=" relative h-[10rem]  lg:h-[20rem]">
            <Image
              src={Prof}
              alt="Background Image"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col relative p-2  bg-white  rounded w-[100%] h-[100%] xl:h-[20rem]">  
            <h1 className=" font-bold   p-4 truncate text-2xl md:text-[120%] lg:text-3xl">SCHOOL PHILOSOPHY</h1>
            <div className="relative z-10 md:text-lg sm: flex flex-col justify-center items-center ">
              <div className="p-2 flex justify-center items-center ">
              Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
              </div>
            </div>
          </div>
          <div className=" relative h-[10rem] lg:h-[20rem]">
            <Image
              src={Prof}
              alt="Background Image"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col relative p-2  bg-white  rounded w-[100%] h-[100%] xl:h-[20rem]">  
            <h1 className=" font-bold   p-4 truncate text-2xl md:text-[120%] lg:text-3xl">SCHOOL VISION</h1>
            <div className="md:text-lg sm: flex flex-col justify-center items-center ">
              <div className="p-2 flex justify-center items-center">
              Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
            
              </div>
            </div>
          </div>
          <div className=" relative h-[10rem] lg:h-[20rem]">
            <Image
              src={Prof}
              alt="Background Image"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative p-2  bg-white rounded w-[100%] h-[100%] xl:h-[20rem]">
            <h1 className=" font-bold   p-4 truncate text-2xl md:text-[120%] lg:text-3xl">SCHOOL MISSION</h1>
            <div className=" flex flex-col justify-center items-center ">
              <div className="p-2 flex justify-center items-center">
              Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center gap-10 p-5">
        <div className="relative ">
          <Image
              src={Peac}
              alt="Background Image"
              quality={100}
              width={300}
              height={150} 
          ></Image>
        </div>
        <div className="relative">
          <Image
              src={Apscu}
              alt="Background Image"
              quality={100}
              width={200}
              height={150} 
          ></Image>
        </div>
        <div className="relative">
          <Image
              src={Seameo}
              alt="Background Image"
              quality={100}
              width={400}
              height={150}  
          ></Image>
        </div>
      </div>
      
    </div>

  );
  }