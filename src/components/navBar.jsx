"use client";
import { useEffect, useState } from "react";
import { Button, Navbar, Typography, IconButton, Drawer } from "@material-tailwind/react";
import SocialPill from "./SocialPill";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NavbarSimple = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenDrawer(false);
  const closeDrawer = () => setOpenDrawer(false);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const navList = (
    <ul className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:gap-6 lg:p-0" onClick={closeDrawer}>
      <Typography as="li" color="blue-gray" className="p-1 font-light">
        <a href="#products" className="flex items-center text-gray-300 hover:text-white" onClick={closeDrawer}>
          Products
        </a>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1 font-light">
        <a href="#team" className="flex items-center text-gray-300 hover:text-white" onClick={closeDrawer}>
          Team
        </a>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1 font-light" onClick={closeDrawer}>
        <a href="#advisors" className="flex items-center text-gray-300 hover:text-white">
          Advisors
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar
        color="transparent"
        className="my-3 max-w-[100vw] lg:max-w-[89vw] bg-gray-900 mx-auto py-3 flex items-center justify-between  "
      >
        <Typography className="m-4 text-white-900 text-xl md:text-3xl font-bold font-baloo">
          <a href="#" className="flex items-center text-gray-300 hover:text-white" >
            AtomInfra
          </a>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:block">
      <SocialPill />
      </div>
        <span
          variant="text"
          className="mr-4 text-xl text-gray-300 hover:text-white lg:hidden"
          ripple={false}
          onClick={() => setOpenDrawer(true)}
        >
          <GiHamburgerMenu />
        </span></div>
      </Navbar>

      {/* Drawer for mobile menu */}
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor="right" className="bg-gray-800 flex border border-gray-800 border-r-gray-900">
        {/* <div className="flex flex-col items-end p-4 ">
          <span
            variant="text"
            className="mr-4 text-xl text-gray-500 hover:text-gray-900"
            ripple={false}
            onClick={() => setOpenDrawer(false)}
          >
            <RxCross2 />
          </span>
        </div> */}
        <div className="container mx-auto flex flex-col mt-[100px] justify-between ">
        <div>
        <Typography className=" text-white-900 text-2xl md:text-3xl font-bold font-baloo px-7" onClick={closeDrawer}>
          <a href="#" className="flex items-center text-gray-300 hover:text-white ">
            AtomInfra
          </a>
        </Typography>
          {navList}
        </div>
          <span className="flex justify-center mb-[50px]"><SocialPill /></span>
        </div>
        
        <div
            id='sidebar'
            className='flex h-full items-center w-0 '
        >
            <div className='absolute right-0 mr-4 w-2 h-[100px] rounded-full bg-gray-900' />
        </div>
      </Drawer>
    </>
  );
};

export default NavbarSimple;
