import React, { useState } from "react";
import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import{signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./login.module.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  
  
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };
  
  
  
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Add your login logic here
  //   signInWithEmailAndPassword(auth, email, password)
    
  //   .then((userCredential) => {
  //   // Signed in 
  //      const user = userCredential.user;
  //      console.log(user);
  //     })
  //  .catch((error) => {
  //       setError(true);
  //       console.log(error);
  //   });
  // }

  return (
    <div className={styles.container}>
      {/*By refactoring just add this form tag here and apply the onSubmit event on form tag */}
      <form onSubmit={handleLogin}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo />
            <div className={styles['logo-explain']}>USER Dashboard</div>
          </div>

          {/* login form */}
          <div className={styles["form-container"]}>
            <div className="t-center" style={{ margin: "15px 0" }}>
              <div className={styles["sm-brand-container"]}>
                <Logo />
              </div>
              <h1>Login</h1>
              <p>Please enter email and password to login</p>
            </div>
            <div >
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label={"Email"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label={"Password"}
              />
              <FullButton label={"Login"} />
              {error && <p className="tc-red t-center">Invalid email or password</p>}
              
              <p className="tc-grey t-center">
                Dont have an account?{" "}
                <Link className="link" href={`/signup`}>Signup for free</Link>
              </p>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
        
