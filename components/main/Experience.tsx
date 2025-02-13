import React from "react";
import Image from "next/image";
import exp_1 from "../../public/exp1.svg";
import exp_2 from "../../public/exp2.svg";
import exp_3 from "../../public/exp3.svg";
import exp_4 from "../../public/exp4.svg";

const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    thumbnail: exp_1,
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    thumbnail: exp_2,
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    thumbnail: exp_3,
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    thumbnail: exp_4,
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto  py-12    ">
      <div className="pb-8 text-center relative z-[500] pt-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold  ">
        My Work Experience
      </span>
      </div>


      <div className="grid md:grid-cols-2 gap-8">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="bg-[#1a172f5e] backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-xl transition-all duration-300 border-2 border-[#8d60d4c5]"
          >
            <Image
              src={card.thumbnail}
              alt={card.title}
              width={64}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="text-gray-400 mt-2">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;