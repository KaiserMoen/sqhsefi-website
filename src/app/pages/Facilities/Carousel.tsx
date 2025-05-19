"use client"
import {data} from "./constants";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Link from "next/link";
export default function Carousel(){
    const [curr,setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? data.length -1 : curr - 1))
    const next = () => setCurr((curr) => (curr === data.length -1 ? 0 : curr + 1))
    return(
        <div className="flex flex-col sm:flex-row justify-evenly">
            
            <div className="flex flex-row sm:w-[65%] sm: m-5">
                <button onClick={prev}>
                    <ChevronLeftIcon className="h-10 w-10 o"></ChevronLeftIcon>
                </button>
                <div className="flex relative overflow-hidden">
                    {data.map((data,id) =>(
                        <Link key={id}
                        href={data.img} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <div className="transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
                                <div className="h-[70vh] w-[100vw] z-0" key={id}>
                                    <Image
                                        src={data.img}
                                        alt="image"
                                        quality={100}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>  
                        </Link>

                    ))}

                </div>
                
                <button onClick={next}>
                    <ChevronRightIcon className="h-10 w-10"></ChevronRightIcon>
                </button>
            </div>
            <div className="mx-10 sm:w-[25%]">
                <div className="flex overflow-hidden my-auto h-full rounded-xl ">
                    {data.map((data, id) => (
                        <div  key={id} 
                            className="w-full flex-shrink-0 transition-transform ease-out duration-500 p-4 mx-auto my-auto "  
                            style={{transform: `translateX(-${curr * 100}%)`}}> 
                            <div className="font-bold text-xl md:text-4xl mb-5">{data.name}</div>
                            <div className="text-[80%] pb-5 border-b-2 border-[rgb(2,50,122)] text-2xl">{data.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

    );
}