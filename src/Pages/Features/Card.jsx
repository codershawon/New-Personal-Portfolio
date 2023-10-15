import React, { useState } from "react";

const Card = ({ item: { title, des, icon } }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full md:w-full px-4 py-6 md:py-10 rounded-lg shadow-xl flex flex-col bg-gradient-to-r from-[--bg-black-100] to-[--bg-black-900] group hover:bg-gradient-to-b hover:from-[--bg-black-50] hover:to-[--bg-black-900] transition-colors duration-100 group">
      <div className="w-10 h-8 flex flex-col justify-between">
        {icon ? (
           <span className="text-4xl" style={{ color: "var(--skin-color)" }}>
           {icon}
         </span>
        ) : (
          <>
            {[...Array(4)].map((_, index) => (
              <span
                key={index}
                className="w-full h-[2px] rounded-lg bg-[#f2f2fc] inline-flex"
              ></span>
            ))}
          </>
        )}
      </div>
      <h2 className="text-lg md:text-lg w-full md:w-96 font-bold text-[--text-black-900] mt-4">
        {title}
      </h2>
      <div className="font-semibold features-text mt-4">
        {expanded ? (
          <div className="overflow-y-auto max-h-40">{des}</div>
        ) : (
          <div className="line-clamp-3">{des}</div>
        )}
      </div>
      <div className="row flex flex-col items-start mt-2">
        {!expanded ? (
          <span className="text-lg font-bold cursor-pointer" onClick={toggleExpand}>
            <div className="buttons padd-15">
                            <button href="#contact-me" className="btn">Read More</button>
                        </div>
          </span>
        ) : (
          <span className="text-lg font-bold cursor-pointer" onClick={toggleExpand}>
            <div className="buttons padd-15">
                            <button href="#contact-me" className="btn">Read Less</button>
                        </div>
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;


