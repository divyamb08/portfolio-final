"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    
    <section className="flex h-screen align-middle justify-center items-center lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 h-full items-center" style={{ marginTop: '-250px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="">
          <h1 className="text-white mb-4 text-4xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold sm:items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF5858] via-red-700 to-[#FFFF45]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation className="text-7xl"
              sequence={[
                "Divyam",
                1000,
                "a Software Developer",
                1000,
                "a Data Scientist",
                1000,
                "an ML Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          </div>
          
          <br></br>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Student by Day, Hacker by Night.
          </p>
          <div className="sm:pb-10">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br rounded-full mr-4 bg-white hover:bg-slate-200 text-black"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1ZBMvAREeeXlM7BwB07gP0e9bJUddfj-b/view?usp=sharing"
              className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br rounded-full mr-4 bg-black border-white hover:bg-white text-white hover:text-[#004c4c]"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] sm:w-[200px] sm:h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Profile-pic.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;