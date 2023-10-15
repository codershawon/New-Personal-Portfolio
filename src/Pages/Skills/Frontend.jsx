import React from 'react';

const Frontend = ({ selectedTab }) => {
    const { image, title, style } = selectedTab;
    
    return (
        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gradient-to-r from-[--bg-black-50] to-[--bg-black-900] ${style}`}>
            <div className="flex flex-col justify-center items-center h-full">
                <img src={image} alt={`Image for ${title}`} className="w-28" />
                <p className='mt-2 text-lg font-semibold'>{title}</p>
            </div>
        </div>
    );
};

export default Frontend;


