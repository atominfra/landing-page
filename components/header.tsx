'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleWindowResize = () => {
    if (window.innerWidth >= 1024) {
      setMenuOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };
  

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navList = (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link
          href="#team"
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          onClick={closeMenu}
        >
          Team
        </Link>
      </li>
      <li>
        <Link
          href="#contact"
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/atominfra"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://linkedin.com/company/atominfra"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 flex justify-center border-b bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-sm dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between max-w-7xl">
      <div className='flex items-center'>
          <Image
            src="https://res.cloudinary.com/dy8hx2xrj/image/upload/v1734099746/atominfra-logo_pmfxxq.png" 
            width={30}
            height={30}
            alt="Atom Infra Logo"
            className='h-[22px] w-[23px] pt-[1px]'
            priority
          />
          <div 
            className='relative text-[24px] font-[700] tracking-tight l-[30px]' 
            style={{ left: '-2px' }}
          >
            tom Infra
          </div>
        </div>
        <div className="flex items-center lg:hidden pr-4">
          <button
            className="text-blue-600 dark:text-blue-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RxCross2 className="w-6 h-6" /> : <GiHamburgerMenu className="w-6 h-6" />}
          </button>
        </div>
        <nav
          ref={navRef}
          className={`lg:flex ${menuOpen ? "block" : "hidden"} absolute lg:static top-full right-0 lg:top-0 lg:right-0 w-full lg:w-auto bg-white dark:bg-gray-900 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-6`}
        >
          {navList}
        </nav>
      </div>
    </header>
  );
}
