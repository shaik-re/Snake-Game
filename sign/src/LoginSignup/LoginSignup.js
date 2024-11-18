import React, { useState, useRef } from 'react';
import './LoginSignup.css';
import user_icon from '../assets/usericon.png';
import mail_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newPassword, setNewPassword] = useState(""); // State for new password

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const generateNewPassword = () => {
    const newPass = Math.random().toString(36).slice(-8); // Generate a random 8-character password
    setNewPassword(newPass);
    return newPass;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (action === "Login") {
      if (password === "password123") { // This is the correct password for demonstration
        setSuccessMessage("Login successful!"); // Set success message for login
        setErrorMessage(""); // Clear any previous error message
        resetForm(); // Reset form after submission
      } else {
        const hintPassword = generateNewPassword(); // Generate a new password on wrong login
        setErrorMessage(`Incorrect password. New suggested password: '${hintPassword}'`); // Show error message with new password
      }
    } else {
      console.log("Signing up with:", { username, email, password });
      setSuccessMessage("Sign up successful!"); // Set success message for sign up
      resetForm(); // Reset form after submission
    }
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleForgotPassword = () => {
    const emailToRecover = prompt("Please enter your email address:");
    if (emailToRecover) {
      const newPass = generateNewPassword(); // Generate a new password for the user
      alert(`A new password has been generated for you: ${newPass}`); // Display the new password
    }
  };

  const isFormValid = () => {
    if (action === "Sign Up") {
      return username && email && password; // Check all fields for sign up
    }
    return email && password; // Check email and password for login
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      {successMessage && <div className='success-message'>{successMessage}</div>} {/* Success message display */}
      {errorMessage && <div className='error-message'>{errorMessage}</div>} {/* Error message display */}

      <form onSubmit={handleSubmit} className='inputs'>
        {action === "Sign Up" && (
          <div className='input' onClick={() => usernameRef.current.focus()}>
            <img src={user_icon} alt='User Icon' />
            <input
              ref={usernameRef}
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}

        <div className='input' onClick={() => emailRef.current.focus()}>
          <img src={mail_icon} alt='Email Icon' />
          <input
            ref={emailRef}
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='input' onClick={() => passwordRef.current.focus()}>
          <img src={password_icon} alt='Password Icon' />
          <input
            ref={passwordRef}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {action === "Login" && (
          <div className='forgot-password'>
            Lost Password? <span onClick={handleForgotPassword}>Click Here</span>
          </div>
        )}

        <div className='submit-container'>
          <button 
            type="submit" 
            className={`submit ${!isFormValid() ? "gray" : ""}`} 
            disabled={!isFormValid()}
          >
            {action}
          </button>
        </div>
      </form>

      <div className='toggle-action'>
        {action === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setAction("Sign Up")} style={{ cursor: 'pointer', color: 'blue' }}>
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setAction("Login")} style={{ cursor: 'pointer', color: 'blue' }}>
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
