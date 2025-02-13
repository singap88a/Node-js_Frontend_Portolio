import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  relative z-[500] pt-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* أيقونات وسائل التواصل الاجتماعي */}
        <div className="flex flex-row justify-center gap-4 mb-[20px]">
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

        {/* حقوق النشر */}
        <div className="mb-[20px] text-[15px] text-center">
        &copy; 2025 Ahmed Singap. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;