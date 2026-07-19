import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {handleLogin , loading} = useAuth()
const navigate = useNavigate()

    if(loading){
      return (
        <h1>Loading...</h1>
      )
    }
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(username,password)
    .then(res=>{
      navigate("/")
    })
    

   
  };

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button>Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
