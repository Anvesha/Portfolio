import React from "react";
import pic from "../public/pic.png";

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: pic,
      name: "Notes Taking Website",
    },
    {
      id: 2,
      logo: pic,
      name: "Bookstore",
    },
    {
      id: 3,
      logo: pic,
      name: "Bookstore",
    },
  ];
  return (
    <>
      <div name = "Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-20">
        <div>
          <h1 className="text-3xl font-bold underline mb-5">Portfolio</h1>
          <span className="underline font-semibold">Featured Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
            {cardItems.map(({ id, logo, name }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300 py-3"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] rounded-full mx-20"
                  alt="image"
                />
                <div>
                  <div className="font-bold underline text-xls mx-10">
                    {name}
                  </div>
                  <p className="mx-5 px-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum Lorem ipsum.
                  </p>
                </div>
                <div className="mx-10 space-x-9 space-y-3">
                  <button className="bg-color-green bg-blue-500 hover:bg-blue-700 text-white p-1 rounded">
                    meri pyari video i am good
                  </button>
                  <button className="bg-color-green bg-green-500 hover:bg-green-700 text-white p-1 rounded">
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
