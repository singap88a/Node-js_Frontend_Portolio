"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Experience from "./Experience";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">


      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[2] w-auto h-auto">
 
        <Experience/>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px] mt-40 md:flex hidden">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute ">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
       </div>
    </div>
  );
};

export default Encryption;
