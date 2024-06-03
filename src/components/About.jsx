import React from "react";

function About() {
  return (
    <>
      <div name = "About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <h1 className="text-3xl font-bold underline mb-5">About</h1>
        <p>
          Hello, I'm Anvesha, a passionate Web developer with a keen eye for
          MERN Stack. With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>

        <br />
        <h1 className="text-xl font-semibold underline mb-5 text-green-500">
          Education
        </h1>
        <div className="flex flex-col">
          <div className="">
            <p>
            • <span className="font-bold underline">Chitkara University, Punjab(2023-2025)</span>:-
            Ongoing Masters in Computer Applications</p>
          </div>

          <div className="">
            <p>
            • <span className="font-bold underline">Government College, Hisar(2019-2022)</span>:-
            Bachelor's in Computer Science</p>
          </div>
        </div>

        <br />
        <h1 className="text-xl font-semibold underline mb-5 text-green-500">
          Skills & Expertise
        </h1>
        <p>
        •<span className="font-bold underline">Programming Languages:- </span>
          Proficient in languages like Java/C++ and Data Structures.
        </p>
        <p>
        • <span className="font-bold underline">Software Proficiency:- </span>
          Advanced knowledge of Microsoft Office Suite (Excel, Word,
          PowerPoint).
        </p>
        <p>
        • <span className="font-bold underline">Web Development:- </span>{" "}
          Expertise in HTML, CSS, JavaScript, and familiarity with frameworks
          like React.
        </p>

        <br />
        <h1 className="text-xl font-semibold underline mb-5 text-green-500">
          Professional Experience
        </h1>
        <p>
          •Maxxmann Communications Pvt Ltd, Chandigarh March 2023-June 2023 (PHP
          Developer)
        </p>
        <p>•Boxfy, Chandigarh Sep 2022-March 2023 (Web Developer Intern) </p>

        <br />
        <h1 className="text-xl font-semibold underline mb-5 text-green-500">
          Achievements and Awards
        </h1>
        <p>• Did 100+ questions on leetcode. </p>
        <p>
          {" "}
          • Got 3rd price at Codathon, Innovative Idea through coding organized
          by Chitkara University.{" "}
        </p>
        <p>
          {" "}
          • Got into top 10 teams at National Level Haryana Police Hackthon
          organized by Hack2Skill.
        </p>
        <p>
          {" "}
          • Successfully Participated at National Level Hackfest organized by
          SAP Labs, India.{" "}
        </p>
        <p>• Successful contributed Open Source.</p>

        <br />
        <h1 className="text-xl font-semibold underline mb-5 text-green-500">
          Mission Statement
        </h1>
        <p>
          My Mission is to leverage my skills and creativity to deliever
          innovative MERN solution that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunity to expand my horizons.
        </p>
      </div>
    </>
  );
}

export default About;
