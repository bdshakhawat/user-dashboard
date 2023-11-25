// pages/password-reset.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
// import './password-reset.css'


// import { auth } from '../firebase'; // adjust the path as necessary

export default function PasswordReset() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your inbox for further instructions');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='form-container'>
      <h1>Password Reset</h1>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} >
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <br/> <br/> 

        <button type="submit">Send Password Reset Email</button>
      </form>
    </div>
  );
}


