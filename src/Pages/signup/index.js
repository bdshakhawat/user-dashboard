import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./signup.module.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // Optional: Here, you can handle additional user information like 'name'
        // Example: Update user profile or add 'name' to Firestore

        router.push('/login');
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
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
              type="email" // Should be 'email' type for correct validation
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
          </div>
        </section>
      </form>
    </div>
  );
};

export default Signup;
