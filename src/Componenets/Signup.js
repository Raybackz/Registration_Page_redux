import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { signup } from "../Store/Slices/Userslices";
import Login from "./Login";


function Signup() {
    const dispatch = useDispatch()


  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [number, setNumber] = useState();
  const [pass, setPass] = useState();
  const [loged, setloged] = useState(false);


  function getformData(e) {

    e.preventDefault()
    const newdata = {
      Username: name,
      Email: email,
      Num: number,
      Password: pass,
    };

    dispatch(signup(newdata))
    alert("Signup successfull ----")
    setloged(true)
  }

  return (
    <>
    {loged===true? <Login/>:
    <div className="container-mid">
      <div className="container">
        <h1> Signup Page</h1>
        <form onSubmit={getformData}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br> <br></br>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Enter your mail"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <br></br> <br></br>
          <label>Number: </label>
          <input
            type="number"
            placeholder="Enter your number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <br></br> <br></br>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
          <br></br> <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
}
    </>
  );
}

export default Signup;