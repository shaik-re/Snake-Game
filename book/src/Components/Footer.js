import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] text-sm'> 

        {/* {----left sectoin} */}

        <div>
        <img className='mb-5 w-40' src={assets.logo} alt=''/>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>we are committed to providing exceptional healthcare services to our community. Established in [Year], we have a proud history of delivering high-quality medical care, ensuring patient safety, and promoting wellness.</p>
        
        </div>
        {/* {----center section} */}
        <div>
          <p className='text-xl font-medium md-5'> COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* {--right section} */}
        <div>
      <p className='text-xl font-medium md-5'>Get In Touch</p>
      <ul className='flex flex-col gap-2 text-gray-600'>
        <li>+1-212-456-7890</li>
        <li>mmohassena45@gmail.com</li>
      </ul>
        </div>
      </div>
      <div>
        {/* {------copy right} */}
        <hr />
        <p className='py-5 text-center '>Copyrights 2024@ prescripto All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer