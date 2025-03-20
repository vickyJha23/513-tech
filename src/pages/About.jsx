import React, { useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import { BsFillCollectionPlayFill } from "react-icons/bs";

import Title from "../components/Title";
import VideoModal from "../components/VideoModal";

const About = () => {
  const [isModalActive, setModalActive] = useState(false);
  return (
    <section className="w-full">
      <div className="w-full bg-slate-200">
        <div className="container h-full mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 py-5">
            {[
              {
                icon: <IoBulbOutline size={35} className="font-bold" />,
                title: "Best Company",
                text: "We are known for innovation and quality service. Our solutions deliver lasting success and set new standards across industries, providing exceptional value to every client we work with.",
              },
              {
                icon: <FaLayerGroup size={35} className="font-bold" />,
                title: "Great Support",
                text: "We offer reliable support with personalized care. Our team provides quick, effective solutions to maintain smooth operations and ensure client satisfaction at every step of the journey.",
              },
              {
                icon: <FaChessKnight size={35} className="font-bold" />,
                title: "2 Years of Experience",
                text: "With two years of expertise, we provide innovative solutions. Our experience helps us address complex challenges and deliver successful outcomes tailored to our clients' unique needs.",
              },
              {
                icon: <FaPencilRuler size={35} className="font-bold" />,
                title: "50+ Services",
                text: "We offer 50+ specialized services across industries. Our diverse solutions foster innovation, growth, and operational excellence, ensuring we meet the needs of every client effectively.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-[320px] max-w-md md:w-2/5 lg:w-1/5 flex flex-col items-center justify-center gap-3 px-4 py-3 rounded-lg h-full bg-white shadow-lg"
              >
                {item.icon}
                <h4 className="font-semibold text-lg tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-center text-[#828282]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full h-full
         bg-white pb-16"
        >
          <div className="container mx-auto">
            <Title
              title="What we do ?"
              color="gray
                  "
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-5 gap-2">
              {[
                {
                  letter: "S",
                  title: "eo optimization",
                  text: "Boost your website's visibility on search engines. Drive more organic traffic with effective SEO strategies.",
                },
                {
                  letter: "F",
                  title: "rontend coding",
                  text: "Build responsive and interactive user interfaces. Enhance user experience with modern frontend technologies.",
                },
                {
                  letter: "D",
                  title: "esign",
                  text: "Create visually appealing and user-friendly interfaces. Enhance brand identity with stunning and intuitive designs.",
                },
                {
                  letter: "A",
                  title: "pps coding",
                  text: "Develop high-performance and scalable applications. Build seamless user experiences.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-4 w-[320px] max-w-80 md:w-2/5 lg:w-1/5 px-3 py-3 h-full"
                >
                  <p className="flex items-end">
                    <span className="text-8xl font-bold text-[#E5E5E5]">
                      {item.letter}
                    </span>
                    <span className="font-semibold ml-1">{item.title}</span>
                  </p>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-48 w-full h-full relative after:absolute after:w-full after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[rgba(0,0,0,0.5)]"
        style={{
          backgroundImage:
            "url('https://theblackpearlspro.com/bobby-demo/demo/images/bg/video-section.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex
             flex-col items-center gap-4"
        >
          <button
            onClick={() => setModalActive(true)}
            className="z-50 text-yellow-500 cursor-pointer"
          >
            <BsFillCollectionPlayFill size={54} />
          </button>
          <p className="text-4xl text-white font-semibold z-50">
            <span>Watch Our</span>
            <br />
            <span className="flex justify-center items-center gap-2">
              <span className="text-center">video</span>{" "}
              <span className="self-end inline-block w-5 h-5 bg-amber-300 rounded-[50%]"></span>
            </span>
          </p>
          <p className="z-50 text-white mt-3 max-w-80 text-center">
            Learn more about who we are, our mission, and what drives us. Watch
            our story unfold in this video.
          </p>
        </div>
      </div>
      {isModalActive && <VideoModal setModalActive={setModalActive} />}
    </section>
  );
};

export default About;
