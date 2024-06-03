import { React, useState } from "react";
import pic from "../../public/pic.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center">
          <div className="flex px-2 py-2">
            <img
              className="h-12 w-12 rounded-full"
              src={pic}
              alt="Web developer pic"
            ></img>
            <h1 className="font-bold text-xl cursor-pointer px-2">
              Anvesh<span className="text-green-500 text-xl">a</span>
              <p className="text-sm">MERN Stack Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-300 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    direction={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setmenu(!menu)}
              className="md:hidden cursor-pointer"
            >
              {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
            </div>
          </div>
        </div>
        {/*for mobile */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h- screen items-center justify-center h-screen space-y-4 font-semibold">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scaler-105 duration-300 cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setmenu(!menu)}
                    className="md:hidden cursor-pointer"
                    to={text}
                    smooth={true}
                    direction={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
