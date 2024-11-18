import React, { useState } from 'react';
import mail_icon from '../../assets/mail.png';
import phone_icon from '../../assets/p.png';
import location_icon from '../../assets/location.png';
import white_arrow from '../../assets/white_arrow.png'; // Ensure this path is correct

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target); // Get form data

    // Process the form data here, e.g., send it to an API or handle it as needed

    // For demonstration, we'll just set a success message
    setResult('Thank you for your message! We will get back to you soon.');
    
    // Optionally reset the form fields
    event.target.reset();
  };

  return (
    <div>
      <div className='contact'>
        <div className='contact-col'>
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              Contact mmohaseena@45gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="" />
              +1 123-456-7890
            </li>
            <li>
              <img src={location_icon} alt="" />
              77 Massachusetts Ave, Cambridge<br />MA 02139, United States
            </li>
          </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Enter Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Enter Your Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>
              Submit Now <img src={white_arrow} alt='' />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
