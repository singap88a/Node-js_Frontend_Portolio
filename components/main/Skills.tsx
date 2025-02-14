"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden md:pb-2 py-2 z-[500]"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {/* عرض المهارات بشكل عادي على الشاشات الكبيرة */}
      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* عرض المهارات في شكل سلايدر على الشاشات الصغيرة */}
      <div className="md:hidden w-full pb-20  md:pb-0">
        <Swiper
          slidesPerView={3} // عدد العناصر المعروضة في كل شريحة
          spaceBetween={10} // المسافة بين العناصر
          autoplay={{
            delay: 0, // التحرك بدون تأخير
            disableOnInteraction: false, // الاستمرار في التحرك حتى بعد التفاعل
            pauseOnMouseEnter: false, // عدم التوقف عند تمرير الماوس
          }}
          loop={true} // تكرار السلايدر
          speed={3000} // سرعة التحرك (يمكن تعديلها)
          modules={[Autoplay]} // تفعيل خاصية التحرك التلقائي
          className="mySwiper"
        >
          {Skill_data.map((image, index) => (
            <SwiperSlide key={index}>
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            </SwiperSlide>
          ))}
          {Frontend_skill.map((image, index) => (
            <SwiperSlide key={index}>
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            </SwiperSlide>
          ))}
          {Backend_skill.map((image, index) => (
            <SwiperSlide key={index}>
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            </SwiperSlide>
          ))}
          {Full_stack.map((image, index) => (
            <SwiperSlide key={index}>
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            </SwiperSlide>
          ))}
          {Other_skill.map((image, index) => (
            <SwiperSlide key={index}>
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* خلفية الفيديو */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;