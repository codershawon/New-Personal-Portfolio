import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/Constants";

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-primary-light via-primary to-secondary"
    >
      <div className="row">
        <div className="section-title text-2xl font-bold">
          <h3>Projects</h3>
        </div>
        </div>

        <div className="projects-content flex justify-center ">
          <button
            className={`${
              toggle === "all" ? "bg-gradient-to-r from-[--bg-black-50] to-[--bg-black-900] text-[--text-black-700]"
              : "text-[--text-black-900]"
            } font-bold text-base py-2 px-4 rounded-l-full transition duration-300`}
            onClick={() => setToggle("all")}
          >
            All
          </button>
          <button
            className={`${
              toggle === "basic"
                ? "bg-gradient-to-r from-[--bg-black-50] to-[--bg-black-900] text-[--text-black-700]"
                : "text-[--text-black-900]"
            } font-bold text-base  py-2 px-4 transition duration-300`}
            onClick={() => setToggle("basic")}
          >
            Basic
          </button>
          <button
            className={`${
              toggle === "mern"
                ? "bg-gradient-to-r from-[--bg-black-50] to-[--bg-black-900] text-[--text-black-700]"
                : "text-[--text-black-900]"
            } font-bold text-base  py-2 px-4 transition duration-300`}
            onClick={() => setToggle("mern")}
          >
            Mern
          </button>
        </div>
        <div className="row">
          <div className="projects-content">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-12 ">
              {(toggle === "all"
                ? projects
                : projects.filter((item) => item.category === toggle)
              ).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Projects;
