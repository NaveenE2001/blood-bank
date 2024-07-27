import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useContext } from "react";

//import noteContext from "../context/notes/noteContext";

const Signup = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
  });
  let Navigate = useNavigate();
  //const [userType, setuserType] = useState("");
  const [secretkey, setsecretkey] = useState("");
  //const context = useContext(noteContext);
  // const { notes } = context;
  //if (!context && !context.notes) {
  // return null;
  //}

  const handleOnChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    if (data.userType === "admin" && secretkey !== "admin") {
      e.preventDefault();
      alert("invalid admin");
    } else {
      e.preventDefault();
      const logs = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          userType: data.userType,
        }),
      });
      const jsom = await logs.json();

      if (jsom.success === true) {
        alert("data posted");
        Navigate("/login");
      }

      console.log(jsom);
    }
  };

  return (
    <div>
      <center>
        <div>
          {" "}
          <strong style={{ fontFamily: "tahomo", fontSize: "100px" }}>
            SignUp Form
          </strong>
        </div>
        <form onSubmit={handleOnSubmit} method="post">
          <div>
            Register As{" "}
            <input
              type="radio"
              name="userType"
              value="user"
              onChange={handleOnChange}
            />
            User
            <input
              type="radio"
              name="userType"
              value="admin"
              onChange={handleOnChange}
            />
            Admin
          </div>
          {data.userType === "admin" ? (
            <div>
              <label>secreat key</label>
              <input
                className="form-outline w-25 form-control"
                type="text"
                id="secretkey"
                name="secretkey"
                placeholder="enter secreat key"
                onChange={(e) => setsecretkey(e.target.value)}
              />
            </div>
          ) : null}
          <label htmlFor="signupfor" className="mx-1 my-2 text-white">
            Name:
          </label>

          <input
            className="form-control form-outline w-25"
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            required
            minLength={2}
          />
          <br />
          <label htmlFor="signupfor" className="mx-3 my-2 text-white">
            Email:
          </label>

          <input
            className="form-outline w-25 form-control"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="signupfor" className="mx-1 my-2 text-white">
            Password:
          </label>

          <input
            className="form-control form-outline w-25"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
            required
            minLength={5}
          />
          <br />

          <input type="submit" className="btn btn-primary" id="login" />
          <br />
          <a href="/" className="link-warning">
            Back to Home
          </a>
        </form>
      </center>
      {/*<div className="container bg-dark">
        <h2>your notes</h2>
        {notes.map((note) => {
          return <p>note.name</p>;
        })}
      </div>*/}
    </div>
  );
};

export default Signup;
