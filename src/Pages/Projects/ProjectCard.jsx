import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';


const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full px-4 py-6 md:py-10 mx-auto bg-white rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-[--bg-black-100] to-[--bg-black-900] group hover:bg-gradient-to-b hover:from-[--bg-black-50] hover:to-[--bg-black-900] transition-colors duration-100 group">
      <div className="mockup-window border border-accent bg-base-300 max-w-xl h-60 rounded">
                                <div className="projectImage flex justify-center h-full px-4 py-1 transition-all duration-[8s] bg-base-200 hover:bg-bottom"
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                    }}
                                >

                                </div>
                            </div>
      <div className="p-6">
        <div className="mb-4 projects-text">
          <div className="text-xl font-semibold text-secondary mb-2">{project.title}</div>
          <div className="text-sm text-secondary">{project.date}</div>
        </div>
        <div className="mb-4 line-clamp-3 overflow-hidden"> 
          <p className="text-secondary-light text-sm projects-text">{project.description}</p>
        </div>
        <div className="flex flex-wrap mb-4 gap-2">
          {project.tags?.map((tag, index) => (
            <button
              key={index}
              className="text-xs font-medium text-black bg-gray-300 rounded-full py-1 px-3 mr-2"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex gap-2 mb-4">
          {project.member?.map((member, index) => (
            <img
              key={index}
              src={member.img}
              alt={`${member.name}'s Avatar`}
              className="w-10 h-10 rounded-full"
            />
          ))}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="btn absolute bottom-4  text-sm font-semibold text-white bg-black hover:bg-primary-dark px-4 py-2 rounded-full transition duration-300 text-left"
        >
          View Project
        </button>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} as="div" className="fixed inset-0 z-10 overflow-y-auto projects-text">
        <div className="flex items-center justify-center w-full">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <div className="relative bg-gradient-to-r from-[--bg-black-100] to-[--bg-black-900] group  p-8 rounded-lg w-full max-w-2xl mt-10 mb-10 mx-auto ">
            <button onClick={() => setOpen(false)} className="absolute top-0 right-0 mt-4 mr-4">
              <MdClose className="h-6 w-6 text-secondary text-[--text-black-700]" />
            </button>
            <div className="mockup-window border border-accent bg-base-300 max-w-xl  h-60 rounded">
                                <div className="projectImage flex justify-center h-full px-4 py-1 transition-all duration-[8s] bg-base-200 hover:bg-bottom"
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                    }}
                                >

                                </div>
                            </div>
            <h2 className="text-[--text-black-700] font-semibold mb-2 mt-4">{project.title}</h2>
            <div className="text-[--text-black-700]  mb-4 projects-text">{project.date}</div>
            <div className="flex flex-wrap mb-4 gap-2">
              {project.tags?.map((tag, index) => (
                <button
                  key={index}
                  className="text-xs font-medium text-black bg-gray-300 rounded-full py-1 px-3 mr-2"
                >
                  {tag}
                </button>
              ))}
            </div>
           <div>
           {project.description.split('\n').map((line, index) => (
            <p key={index} className="text-[--text-black-700]  leading-6 ">
              {line}
            </p>
          ))}
           </div>
          
            <div className="flex flex-col gap-4 mt-4">
              {project.member?.map((member, index) => (
  
                <div key={index} className="flex gap-2 items-center">
                    <div></div>
                  <img src={member.img} alt={`${member.name}'s Avatar`} className="w-10 h-10 rounded-full" />
                    <div className="text-[--text-black-700] font-semibold">{member.name}</div>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-primary ">
                      <FaGithub className="h-6 w-6 inline-block absolute right-5" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary">
                      <FaLinkedin className="h-6 w-6 inline-block absolute right-20" />
                    </a>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn  font-semibold px-4 py-2 rounded-full mr-2">
                View Code
              </a>
              <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="btn font-semibold px-4 py-2 ">
                View Live App
              </a>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProjectCard;





