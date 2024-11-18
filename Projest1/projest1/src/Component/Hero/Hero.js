import './Hero.css';
import arrow from '../../assets/arrow-btn1.png';
import pause from '../../assets/pause1.png';
import play from '../../assets/play1.png';
import { useState } from 'react';

const Hero = ({ herodata, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  // State for form visibility and form inputs
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', number: '', gender: '', car: '' });
  const [resultMessage, setResultMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.number || !formData.gender || !formData.car) {
      setResultMessage('Please fill out all fields.');
      return;
    }

    // Process form data (e.g., send to an API)
    console.log('Form submitted:', formData);
    setResultMessage('Thank you for your message! We will get back to you soon.');

    // Reset form
    setFormData({ name: '', number: '', gender: '', car: '' });
  };

  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className='hero-explore'>
        <p>Explore The Features</p>
        <img src={arrow} alt='Explore features arrow' />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause : play} alt={playStatus ? 'Pause video' : 'Play video'} />
          <p>See The Video</p>
        </div>
      </div>

      {/* Contact Button */}
      <button onClick={() => setIsContactFormVisible(!isContactFormVisible)} className="btn dark-btn">
        {isContactFormVisible ? 'Hide Contact Form' : 'Contact Us'}
      </button>

      {/* Conditionally Render the Contact Form */}
      {isContactFormVisible && (
        <form onSubmit={handleSubmit} className="hero-form">
          <h3>Contact Us</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="number"
            placeholder="Enter Your Number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          {/* Gender Selection */}
          <div className="gender-selection">
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>

          {/* Car Selection */}
          <div className="car-selection">
            <label>Car Selection:</label>
            <label>
              <input
                type="radio"
                name="car"
                value="car1"
                checked={formData.car === 'car1'}
                onChange={handleChange}
              />
              Car 1
            </label>
            <label>
              <input
                type="radio"
                name="car"
                value="car2"
                checked={formData.car === 'car2'}
                onChange={handleChange}
              />
              Car 2
            </label>
            <label>
              <input
                type="radio"
                name="car"
                value="car3"
                checked={formData.car === 'car3'}
                onChange={handleChange}
              />
              Car 3
            </label>
          </div>

          <button type="submit" className="btn dark-btn">Submit Now</button>
          {resultMessage && <span className="form-result">{resultMessage}</span>}
        </form>
      )}
    </div>
  );
};

export default Hero;
