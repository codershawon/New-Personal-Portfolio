import React from 'react';
import Card from './Card';
import { featuresData } from '../../constants/featuresData';

const Features = () => {
    return (
      <>
      <div className="row">
      <div className="section-title text-2xl font-bold">
          <h3>Features</h3>
      </div>
  </div>
        <div className='row'>
       <div className='features-content'>
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
         
         {featuresData.map((item) => (
           <Card item={item} key={item.id} />
         ))}
       </div>
       </div>
        </div>
    </>
    );
};

export default Features;