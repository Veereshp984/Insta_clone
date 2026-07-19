import React, { useState } from "react";
import { Link ,useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {handleRegister , loading} = useAuth()
const navigate = useNavigate()

    if(loading){
       return (
        <h1>Loading...</h1>
      )
    }


  const submitHandler = async (e) => {
    e.preventDefault();

    handleRegister(username,email,password)
    .then(res=>{
      navigate("/")
    })


        
 
  };
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
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
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <button>Register</button>
        </form>

        <p>
          Already have an account ?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
