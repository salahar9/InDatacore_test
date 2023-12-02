
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SigninSignup.css';
// import { useAuth } from '../utils/useAuth';
import { useAuth } from '../../context/AuthContext';

const SigninSignup: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, login } = useAuth();
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
      login()
      navigate('/dashboard');
    } else {
      console.log('Invalid credentials');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {

    if (isLoggedIn) {
      navigate("/dashboard")
    }
  }

    , [])

  return (
    <div className="signin-signup-container">
      <div className="form-container">
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />

          {!isSignIn && (
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button className="green text-light m-2" type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </form>

        <p onClick={toggleSignIn}>
          {isSignIn ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
        </p>
      </div>
    </div>
  );
};

export default SigninSignup;
