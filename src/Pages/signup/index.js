


import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FullButton from '@aio/components/FullButton';
import Input from '@aio/components/Input';
import Logo from '@aio/components/Logo';
import styles from './signup.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { validateUserData } from '../../middleware';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role,setRole]=useState(" ");
  const [error, setError] = useState('');
  const router = useRouter();

  const isValidPassword = (password) => {
    const minLength = 8;
    const maxLength = 16;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      hasLowerCase &&
      hasUpperCase &&
      hasSpecialChar
    );
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Password must be 8-16 characters long and include at least one lowercase letter, one uppercase letter, and one special character.');
      return;
    }

    if (validateUserData({ name, email, role: 'user' })) {
      // Proceed to store data in Firestore
      addDoc(collection(firestore, "users"), {
        name:name,
        email:email,
        role:"users",
      })
      .then(() => {
        alert('Message submitted 👍' );
      })
      .catch((error) => {
        alert(error.message);
      });
  
      setName('');
      setEmail('');
      setRole('');
    }


    

       
  };



  return (
    <div className={styles.container}>
      <form onSubmit={handleSignup}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo />
            <div className={styles['logo-explain']}>USER Dashboard</div>
          </div>

          <div className={styles["form-container"]}>
            <div className="t-center" style={{ margin: "15px 0" }}>
              <div className={styles["sm-brand-container"]}>
                <Logo />
              </div>
              <h1>Signup</h1>
              <p>Please enter email and password to signup</p>
            </div>
            <div>
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                label={"Name"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label={"Email"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label={"Password"}
              />
              <FullButton label={"Sign Up"} />
              {error && <p className="tc-red t-center">{error}</p>}
              <p className="tc-grey t-center">
                Have an account? 
                <Link href={`/login`}>Login </Link>
              </p>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Signup;

