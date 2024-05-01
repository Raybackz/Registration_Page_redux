import React, { useState } from "react";

import Welcome from "./Welcome";
import { useSelector } from "react-redux";

export default function Login() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [welcome, setWelcome] = useState(false);


    const data = useSelector((store)=>store.user)
    // console.log(data)


  function getFormData(e) {


    e.preventDefault()
    let found = false
    for (let i = 0; i < data.length; i++) { 
      if ((data[i].Email===name.toLowerCase()||name.toUpperCase())&&data[i].Password===pass) {
        found = true;
        break;
      }
    }

    if (found) {
      setWelcome(true);
    } else {
      alert('Invalid user');
    }

  } 

  function userHandler(e) {
    let item = e.target.value;
    setName(item);
  }

  function passHandler(e) {
    let item = e.target.value;

    setPass(item);
  }

  return (
    <>
      {welcome ===true ? (
        <Welcome data={name}/>
      ) : (
        <div className="container-mid">
        <div className="container">
          <h1>Login Form </h1>
          <form onSubmit={getFormData}>
            <input
              type="email"
              placeholder="Enter your mail"
              onChange={userHandler}
            />
            <br></br>
            <br></br>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={passHandler}
            />
            <br></br> <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
        </div>
      )}
    </>
  );
}

