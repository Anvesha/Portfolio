import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className = "flex flex-col items-center justify-center">
            <div className="flex space-x-5">
            <FaFacebookSquare size = {23}/>
            <FaSquareTwitter size = {23}/>
            <FaSquareInstagram size = {23}/>
            <FaLinkedin size = {23}/>
            </div>
            <div className = "mt-8 border-t border-gray-700 pt-8 flex-flex-col items-center ">
              <p>&copy; 2024 Your Company, All rights Reserverd </p>
              <p className = "mx-10 mt-2">Supportive partner ❤️@Krishsharma</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
