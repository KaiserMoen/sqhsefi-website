"use client";
import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Fragment } from "react";
import coverPage from "../../../public/images/cover_page.png" ;

export default function Header () {
  return (
    <div className="">
      <div className="w-[100%] h-[20vh] lg:h-[30vh]  relative">
        <Image
          src={coverPage}  // Path to the image in the public folder
          alt="A description of the image"  // Alt text for accessibility
          quality={100}
          fill
          className="object-cover"
        />
      </div>
      <Popover
          
        className={
          "mx-auto flex justify-evenly items-center border-b-2 px-6 py-2 h-19 bg-[#02327a] text-white"

        }>
          <div className="grow ">
            <div className="hidden text-lg sm:justify-between sm:flex items-center md:justify-center gap-2 md:gap-12 ">
              <Link className = "hover:text-[#EDCD1F] hover:font-bold text-xl" href="/" >Home</Link>
              <Link className = "hover:text-[#EDCD1F] hover:font-bold text-xl" href="/#about_page" >About</Link>
              <Link className = "hover:text-[#EDCD1F] hover:font-bold text-xl" href="/#department_page" >Departments</Link>
              <Link className = "hover:text-[#EDCD1F] hover:font-bold text-xl" href="/#facilities_page" >Facilities</Link>
            </div>
          </div>
          <div className="flex grow items-center justify-end sm:hidden">
            <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focuse:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true"></Bars3Icon>
            </PopoverButton>
          </div>
          <Transition
          as={Fragment}
          enter = "duration-200 ease-out"
          enterFrom = "opacity-0 scale-95"
          enterTo = "opacity-100 scale-100"
          leave = "duration-100 ease-in"
          leaveFrom ="opacity-100 scale-100"
          leaveTo = "opacity-0 scale-95">
            <PopoverPanel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                  <div className="px-5 pt-5 pb-6 text-black">
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold">MENU</h1>
                      <div className="*-mr-2">
                        <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close Menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true"></XMarkIcon>
                        </PopoverButton>
                      </div>
                    </div>
                    <div className="mt-6 ">
                      <nav className="grid gap-y-8 ">
                        <Link className = "p-2 hover:bg-gray-100" href="/" >Home</Link>
                        <Link className = "p-2 hover:bg-gray-100" href="/#about_page" >About</Link>
                        <Link className = "p-2 hover:bg-gray-100" href="/#department_page" >Departments</Link>
                        <Link className = "p-2 hover:bg-gray-100" href="/#facilities_page" >Facilities</Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </PopoverPanel>  
          </Transition>
            
      </Popover>
    </div>
    
  );
}
