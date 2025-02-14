"use client"; 

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";  
import { 
  FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, 
  FaLinkedin, FaGithub, FaPaperPlane, FaTimes 
} from "react-icons/fa";

const SocialMediaIcons: React.FC = () => {
  const [showIcons, setShowIcons] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null); 

  const toggleIcons = () => {
    setShowIcons((prev) => !prev);
  };

   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowIcons(false);
      }
    };

    if (showIcons) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showIcons]);

  return (
    <div ref={containerRef} className="fixed bottom-10 md:left-10 z-[600] flex items-center left-5">
       <motion.button
        onClick={toggleIcons}
        className="p-4 button-primary text-white rounded-full   transition duration-300 flex items-center justify-center relative"
        whileTap={{ scale: 0.9 }}
      >
        {showIcons ? <FaTimes size={24} /> : <FaPaperPlane size={24} />}
      </motion.button>

       <AnimatePresence>
        {showIcons && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.3 }}
            animate={{ opacity: 1, x: 10, scale: 1 }} 
            exit={{ opacity: 0, x: -50, scale: 0.3 }}  
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex space-x-3 bg-[#1a172f5e] backdrop-blur-md border border-[#8d60d4c5]  p-2 rounded-lg shadow-lg "
          >
            {[
              { icon: FaWhatsapp, link: "https://wa.me/201001351667", color: "bg-green-500 hover:bg-green-600" },
              { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=100076069655456", color: "bg-blue-600 hover:bg-blue-700" },
              { icon: FaInstagram, link: "https://www.instagram.com/ahmed_singap/?__pwa=1", color: "bg-pink-500 hover:bg-pink-600" },
               { icon: FaLinkedin, link: "https://www.linkedin.com/in/ahmed-singap-98aa1b28b/", color: "bg-blue-800 hover:bg-blue-900" },
              { icon: FaGithub, link: "https://github.com/singap88a", color: "bg-gray-800 hover:bg-gray-900" }
            ].map(({ icon: Icon, link, color }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 text-white rounded-full transition duration-300 flex items-center justify-center ${color}`}
                initial={{ opacity: 0, x: -20, scale: 0.3 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.3 }}  
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaIcons;
