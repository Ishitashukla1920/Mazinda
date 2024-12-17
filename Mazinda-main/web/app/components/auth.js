"use client";
import React, { useState } from 'react';
import axios from '../services/api'; // Import Axios instance

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? '/auth/login' : '/auth/signup';
      const { data } = await axios.post(url, { email, password });
      alert(data.message);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to Sign Up?' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default Auth;
