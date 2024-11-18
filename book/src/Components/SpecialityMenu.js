import React from 'react';
import { specificationsData } from '../assets/assets'; // Ensure that this imports correctly
import { Link } from 'react-router-dom';

// This array should contain fully imported images to avoid issues with require
const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-gray-800'id='speciality'>
      <h1 className='text-3xl font-medium'>Find By Specialty</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors. Schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specificationsData.map((item, index) => (
          <Link onClick={()=>window.scrollTo(0,0)}className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'key={index} to={`/doctors/${item.speciality}`}>
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
