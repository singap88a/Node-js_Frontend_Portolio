"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // أيقونات الهامبرغر
import { FiAlignRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[1000] px-4 sm:px-10">
      <div className="container mx-auto">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          {/* ✅ Logo Section */}
          <Link href="/" className="h-auto w-auto flex flex-row items-center relative z-[500]">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />
          </Link>

          {/* ✅ Hamburger Icon for Small Screens */}
          <div className="md:hidden relative z-[500]">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-gray-300 w-6 h-6" />
              ) : (
                <FiAlignRight className="text-gray-300 w-10 h-10" />
              )}
            </button>
          </div>

          {/* ✅ Navigation Links - Desktop */}
          <div className="hidden md:flex w-full max-w-[500px] h-full items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[10px] sm:px-[20px] py-[10px] rounded-full text-gray-200">
              <Link href="/pages/home" className="cursor-pointer text-sm sm:text-base">
                Home
              </Link>
              <a href="#skills" className="cursor-pointer text-sm sm:text-base">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer text-sm sm:text-base">
                Projects
              </a>
              <Link href="#contact" className="cursor-pointer text-sm sm:text-base">
                Contact Us
              </Link>
            </div>
          </div>

          {/* ✅ Social Icons */}
          <div className="hidden md:flex flex-row gap-3 sm:gap-5">
            <Link href="/pages/admin" className="w-full button-primary text-white font-bold py-2 px-6 rounded-lg">
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#030014]/70 backdrop-blur-md text-white   flex flex-col items-center gap-4 transition-all duration-300 pt-20 ${
          menuOpen ? "block" : "hidden"
        } md:hidden`}>
      <div
        className=" flex flex-col gap-4 text-center bg-[#160f40] w-full pt-20 absolute top-0 pb-6"
      >
        
        <a href="#about-me" className="text-lg" onClick={() => setMenuOpen(false)}>
          About me
        </a>
        <a href="#skills" className="text-lg" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#projects" className="text-lg" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <Link href="#contact" className="text-lg" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>

        {/* Social Icons في القائمة الجانبية */}
        <div className="flex flex-row gap-3 mt-4 ">
          <Link href="/pages/admin" className="  button-primary text-white font-bold py-2 px-6 rounded-lg text-center mx-auto">
            Admin
          </Link>
        </div>
                <div className="flex flex-row justify-center gap-6   py-4">
                  {/* فيسبوك */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100076069655456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
                  >
                    <FaFacebook size={24} />
                  </a>
        
                  {/* إنستجرام */}
                  <a
                    href="https://www.instagram.com/ahmed_singap/?__pwa=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-pink-500 transition-colors duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
        
                  {/* لينكد إن */}
                  <a
                    href="https://www.linkedin.com/in/ahmed-singap-98aa1b28b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
        
                  {/* جيت هاب */}
                  <a
                    href="https://github.com/singap88a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-gray-500 transition-colors duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
        
                  {/* واتساب */}
                  <a
                    href="https://wa.me/201001351667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-green-500 transition-colors duration-300"
                  >
                    <FaWhatsapp size={24} />
                  </a>
        
                  {/* تويتر */}
                  <a
                    href="https://x.com/ahmed_singap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;