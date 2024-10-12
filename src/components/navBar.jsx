"use client"
import { useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import GithubPill from "./GithubPill";


const NavbarSimple = (props) => {
    const [darkMode, setDarkMode] = useState(props.whiteNavbar);
    const [scrollPos, setScrollPos] = useState(0);
    const [navbarColor, setNavbarColor] = useState("bg-transparent");

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
        <GithubPill/>

      </ul>
    );

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPos(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPos > 210) {
            setNavbarColor(
                "bg-[rgba(0,0,0,0.85)] backdrop-blur-md max-w-[100vw] lg:max-w-[100vw] my-0 rounded-xl rounded-[0px]"
            );
        } else {
            setNavbarColor("bg-transparent");
        }
    }, [scrollPos, darkMode]);

    return (
        <>
            <Navbar
                color="transparent"
                className='my-3 max-w-[100vw] lg:max-w-[89vw]  mx-auto py-3  flex items-center justify-between'
            >
                <Typography className=" m-4 text-white-900 text-3xl font-bold font-merriweather" >
          AtomInfra
        </Typography>
                <div className="mr-4 hidden lg:block">{navList}</div>
            </Navbar>
        </>
    );
};

export default NavbarSimple;