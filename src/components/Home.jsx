import React from "react";
import image from "../../public/image.png";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div name = "Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex">
        <div className="flex flex-col md:flex-row space-x-20">
          <div className="md:w-1/2 mt-12 md:mt-28 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In my feed</span>
            <h1 className="text-3xl">
              Hello, I'm a{" "}
              <span className="text-red-700 font-bold text-2xl md:text-4xl">
                <ReactTyped
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={30}
                  loop={true}
                />
              </span>
            </h1>
            <br />
            <p className="text-sm md:text-md text-justify">
              Passionate and experienced MERN stack developer, dedicated to
              building dynamic and responsive web applications from the ground
              up, leveraging MongoDB, Express.js, React, and Node.js to create
              seamless user experiences.
            </p>
            <br />
            {/*Social Media Icons*/}
            <div className="flex flex-col md:flex-row space-y-2 md:justify-between space-y-6 md:space-y-2 items-center">
              <div className="space-y-2 ">
                <h1 className="text-xl font-bold">Available on</h1>
                <ul className="flex space-x-2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anvesha-sharma/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-110" />
                    </a>
                  </li>

                  <li>
                    <a href="https://leetcode.com/u/Anukrish/" target="_blank">
                      <SiLeetcode className="text-2xl cursor-pointer hover:scale-110" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/anvesha.02_/"
                      target="_blank"
                    >
                      <FaSquareInstagram className="text-2xl cursor-pointer hover:scale-110" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://web.telegram.org/a/#1380388536"
                      target="_blank"
                    >
                      <BsTelegram className="text-2xl cursor-pointer hover:scale-110" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="text-xl font-bold">Currently working on</h1>
                <ul className="flex space-x-2">
                  <SiMongodb className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 " />
                  <SiExpress className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  <IoLogoReact className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  <FaNodeJs className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  <FaJava className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                  <BiLogoSpringBoot className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200" />
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 order-1 mt-8 mx-10">
            <img
              className="md:h-{450px] md:w-[450px] rounded-full items-center"
              src={image}
            ></img>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
