// pages/password-reset.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import FullButton from "@aio/components/FullButton";
import styles from './password-reset.module.css';
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";





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
    <div className={styles.container}>
      
      {/* <h1 >Password Reset</h1> */}
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} >
        <section className={styles["login-container"]} >
           <div className={styles["brand-container"]}>
              <Logo />
              <div className={styles['logo-explain']}>USER Dashboard</div>
            </div>
            <div className={styles["form-container"]}>
                <div className="t-center" style={{ margin: "15px 0" }}>
                  <div className={styles["sm-brand-container"]}>
                    <Logo />
                  </div>
                  <h1>Reset Password</h1>
                  <p>Please enter email to Reset Password</p>
                </div>
                <div>
                    <input 
                      // className={styles[emailInput::placeholder]}
                      // inputContainerStyle={{ padding: "0px 30px", marginLeft:"30px" }} 
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      label={"Email"}
                    />
                    <FullButton label={"Send password reset Email"} />


                    {/* <button type="submit">Send Password Reset Email</button> */}
                  </div>

              </div>


         </section>
        
      </form>
    </div>
  );
}


  /* <div className={styles.container}>
      {/*By refactoring just add this form tag here and apply the onSubmit event on form tag */
      /* <form onSubmit={handleLogin}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo />
            <div className={styles['logo-explain']}>USER Dashboard</div>
          </div>

          {/* login form */
          /* <div className={styles["form-container"]}>
            <div className="t-center" style={{ margin: "15px 0" }}>
              <div className={styles["sm-brand-container"]}> */
                /* <Logo />
              </div>
              <h1>Login</h1>
              <p>Please enter email and password to login</p>
            </div>
            <div >
              <Input */
                /* inputContainerStyle={{ padding: "15px 30px" }} */
                /* type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label={"Email"}
              /> */
              /* <Input */
                /* inputContainerStyle={{ padding: "15px 30px" }}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label={"Password"}
              />
              <FullButton label={"Login"} />
              {error && <p className="tc-red t-center">Invalid email or password</p>}
              
              <p className="tc-grey t-center">
                Dont have an account?{" "} */
                /* <Link className="link" href={`/signup`}>Signup for free</Link>

              </p>
              <p className="tc-grey t-center">
                  Forgot your password? 
                  <Link href="/password-reset">Reset it here</Link> */

                /* </p>
            </div>
          </div>
        </section>
      </form> */
    /* </div> */


