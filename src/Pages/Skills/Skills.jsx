import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Frontend from "./Frontend";
import Others from "./Others";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const frontEnd=selectedCategory.filter((item)=>item.category==="Frontend")
  const backEnd=selectedCategory.filter((item)=>item.category==="Backend")
  const others=selectedCategory.filter((item)=>item.category==="Others")
  
  useEffect(() => {
    fetch("Experience.json")
      .then((res) => res.json())
      .then((data) => setSelectedCategory(data));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="section-title text-2xl font-bold">
          <h3>Skills</h3>
        </div>
      </div>
    <div className="row">
    <div className="skills-content">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gradient-to-r from-[--bg-black-50] to-[--bg-black-900] p-1">
            <Tab
             className="w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-[--text-black-900] ring-white ring-opacity-60 ring-offset-2 ring-offset-[ --text-black-700] focus:outline-none focus:ring-2"
            >
              Frontend
            </Tab>
            <Tab
               className="w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-[--text-black-900] ring-white ring-opacity-60 ring-offset-2 ring-offset-[ --text-black-700] focus:outline-none focus:ring-2"
            >
              Backend
            </Tab>
            <Tab
              className="w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-[--text-black-900] ring-white ring-opacity-60 ring-offset-2 ring-offset-[ --text-black-700] focus:outline-none focus:ring-2"
            >
              Others
            </Tab>
          </Tab.List>
          <Tab.Panels >
         
          <Tab.Panel className="w-full grid grid-cols-1 gap-8  py-6 sm:grid-cols-2 lg:grid-cols-3 ">
  {frontEnd && frontEnd.map((selectedTab) => (
    <Frontend key={selectedTab.id} selectedTab={selectedTab} />
  ))}
</Tab.Panel>
          <Tab.Panel className="w-full grid grid-cols-1 gap-8  py-6 sm:grid-cols-2 lg:grid-cols-3 ">
  {backEnd && backEnd.map((selectedTab) => (
    <Frontend key={selectedTab.id} selectedTab={selectedTab} /> 
  ))}
</Tab.Panel>
          <Tab.Panel className="w-full grid grid-cols-1 gap-8  py-6 sm:grid-cols-2 lg:grid-cols-3 ">
  {others && others.map((selectedTab) => (
    <Others key={selectedTab.id} selectedTab={selectedTab} /> 
  ))}
</Tab.Panel>




</Tab.Panels>

        </Tab.Group>
      </div>
    </div>
    </div>
  );
};

export default Skills;





