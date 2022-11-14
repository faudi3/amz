import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    const res = signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  const register = (e) => {
    e.preventDefault();
    const res = createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={"login"}>
      <Link to={"/"}>
        <img
          className={"login__img"}
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt={""}
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__SignBtn" onClick={signIn} type={"submit"}>
            Sign in
          </button>
          <button className="login__RegisterBtn" onClick={register}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
