"use client"
import { useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import SocialPill from "./SocialPill";


const NavbarSimple = (props) => {

    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        
        <Typography
          as="li"
          color="blue-gray"
          className="p-1 font-light"
        >
          <a href="#projects" className="flex items-center text-gray-300 hover:text-white">
            Projects
          </a>
        </Typography>
        <Typography
          as="li"
          color="blue-gray"
          className="p-1 font-light"
        >
          <a href="#team" className="flex items-center text-gray-300 hover:text-white">
            Team
          </a>
        </Typography>
        <Typography
          as="li"
          color="blue-gray"
          className="p-1 font-light"
        >
          <a href="#advisors" className="flex items-center text-gray-300 hover:text-white">
          Advisors
          </a>
        </Typography>
        <SocialPill/>

      </ul>
    );


    return (
        <>
            <Navbar
                color="transparent"
                className='my-3 max-w-[100vw] lg:max-w-[89vw] bg-gray-900 mx-auto py-3 flex items-center justify-between'
            >
              <Typography className=" m-4 text-white-900 text-xl md:text-3xl font-bold font-baloo" >
                <a href="#" className="flex items-center text-gray-300 hover:text-white">
                  AtomInfra
                </a>
              </Typography>
                <div className="mr-4 hidden lg:block">{navList}</div>
            </Navbar>
        </>
    );
};

export default NavbarSimple;