"use client";
import Image from "next/image";
import Seameo from "../../../../public/images/seameo.png" ;
import Apscu from "../../../../public/images/apscu.png";
import Peac from "../../../../public/images/peac.jpg" ;
import ValueBackground from "../../../../public/images/backgroundvalues.jpeg";
import Video from "./video";
export default function Main() {
  return (
    <div>
      <div className="relative z-0">
        <Video/>
      </div>
      <div className="flex  flex-col justify-center items-center rounded border-6 border-[rgb(2,50,122)] p-2 m-20 mt-40 mb-40 gap-12 sm:flex-row">
        <h1 id = "about_page" className="font-bold text-4xl  border-r-4 border-[#EDCD1F]  p-4 lg:text-6xl">ABOUT US</h1>
        <div className="md:text-xl sm: flex flex-col ">
          <div>
          <b>Established in 1945</b>, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
          </div>
          <div className="gap-4 grid grid-cols-2 lg:grid lg:grid-cols-4  pt-10">
              <div className="flex justify-evenly p-2  font-bold  flex-col">
                <div className="text-lg md:text-4xl">20+</div>
                <div className="text-[70%]">SUBJECTS </div>
              </div>
              <div className="flex justify-evenly p-2  font-bold  flex-col">
                <div className="text-lg md:text-4xl">80</div>
                <div className="text-[70%]">YEARS OF EDUCATION</div>
              </div>
              <div className="flex justify-evenly p-2  font-bold  flex-col">                
                <div className="text-lg md:text-4xl">1000+</div>
                <div className="text-[70%]">STUDENTS </div>
              </div>
              <div className="flex justify-evenly p-2  font-bold  flex-col">                 
                <div className="text-lg md:text-4xl">32+</div>
                <div className="text-[70%]">TEACHERS</div>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(220,220,221)] p-2 md:p-10 z-0 relative flex flex-col lg:flex-row">
        <Image
          src={ValueBackground}
          alt="Background Image for Values"
          quality={100}
          placeholder="blur"
          fill
          sizes="100vh"
          className="object-cover"
        ></Image>
        <div className=" flex-col p-2 z-10 relative text-white my-auto">
          <h1 className="text-4xl flex justify-center items-center p-4 font-bold">LOOK INTO OUR VALUES</h1>
          <p className="text-lg p-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa animi rem a ut omnis at dolore illo maxime ea praesentium adipisci distinctio voluptatibus cupiditate numquam, unde neque, ipsa illum?</p>
        </div>
        <div className="pt-5 px-2 pb-5 flex  flex-col  lg:grid lg:grid-cols-3 gap-2 h-full ">
          
          <div className="flex flex-col relative p-2  bg-white  rounded w-[100%] h-[100%] xl:h-[20rem] m">  
            <h1 className=" font-bold   p-4 truncate text-2xl md:text-[120%] lg:text-3xl">SCHOOL PHILOSOPHY</h1>
            <div className="relative z-10 md:text-lg sm: flex flex-col justify-center items-center ">
              <div className="p-2 flex justify-center items-center ">
              Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
              </div>
            </div>
          </div>
         
          <div className="flex flex-col relative p-2  bg-white  rounded w-[100%] h-[100%] xl:h-[20rem]">  
            <h1 className=" font-bold   p-4 truncate text-2xl md:text-[120%] lg:text-3xl">SCHOOL VISION</h1>
            <div className="md:text-lg sm: flex flex-col justify-center items-center ">
              <div className="p-2 flex justify-center items-center">
              Established in 1945, San Quintin High School Educational Foundation, Incorporated has long been a center of academic excellence. This private institution is committed to preparing and training its students to become productive members of local, national and global community.
            
              </div>
            </div>
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

      <div className=" flex justify-center items-center flex-col mt-20 mb-20">
        <div className="text-center w-[60%] my-auto mx-auto">
          <h1 className="font-bold text-3xl md:text-6xl p-4 border-b-4 border-[#EDCD1F] ">OUR PARTNERS</h1>
          <p className="m-2"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b> Porro similique quibusdam et aliquam, molestias nostrum! Facere culpa consequuntur architecto perspiciatis, omnis, rem consectetur quisquam ab tempora magni maxime est suscipit.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 p-5 w-[70%]">
          <div className="relative border-2 p-2 rounded-lg ">
            <Image
                src={Peac}
                alt="Background Image"
                quality={100}

            ></Image>
          </div>
          <div className="relative border-2 p-2 rounded-lg">
            <Image
                src={Apscu}
                alt="Background Image"
                quality={100}

            ></Image>
          </div>
          <div className="relative border-2 p-2 rounded-lg">
            <Image
                src={Seameo}
                alt="Background Image"
                quality={100}

            ></Image>
          </div>
        </div>
      </div>

      
    </div>

  );
  }