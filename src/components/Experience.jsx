import React from 'react'
import html from '../../public/html.png'
import css from '../../public/css.jpg'
import javascript from '../../public/javascript.jpg'
import mongodb from '../../public/mongo.jpg'
import express from '../../public/express.jpg'
import react from '../../public/react.jpg'
import nodejs from '../../public/node.jpg'
import java from '../../public/java.jpg'

function Experience() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: express,
      name: "Express",
    },
    {
      id: 6,
      logo: react,
      name: "React",
    },
    {
      id: 7,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 8,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <>
      <div name = "Experience" className="max-w-screen-2xl rounded mx-auto px-4 md:px-20 my-20 mt-20">
        <div>
          <h1 className="text-3xl font-bold underline mb-5">Experience</h1>
          <span className="text-s">I have Hand's on experience in:-</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
            {cardItems.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center md:w-[250px] md:h-[200px] border-[2px] rounded shadow-lg cursor-pointer hover:scale-110 duration-300 py-3"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[125px] h-[120px] mx-20 rounded"
                  alt="image"
                />
                <div>
                  <div className="font-bold text-xls mx-15 px-20 underline">
                    {name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience