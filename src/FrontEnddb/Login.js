import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
//import NoteState from "../context/notes/NoteState";
//import Notes from "./Notes";

const Login = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  let history = useNavigate();
  const handleOnChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const logs = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    const json = await logs.json();

    console.log(json);
    if (json.success === "admin") {
      localStorage.setItem("token", json.authtoken);
      history("/notes");
    } else if (json.success === "user") {
      alert("user dashboard");
      localStorage.setItem("token", json.authtoken);
      history("/student");
    }
  };

  return (
    <div>
      <div className="container bg-black"> </div>
      <center>
        <div>
          {" "}
          <strong style={{ fontFamily: "tahomo", fontSize: "100px" }}>
            Login Form
          </strong>
        </div>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="loginfor" className="mx-3 my-2 text-white">
            Email:
          </label>
          <input
            className="form-outline  form-control"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="loginfor" className="mx-1 my-2 text-white">
            Password:
          </label>
          <input
            className="form-control form-outline"
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
          <p className="my-1 text-white">
            Not a member ?
            <a href="/signup" className="link-warning">
              create an account
            </a>
          </p>
          <a href="/" className="link-warning">
            Back to Home
          </a>
          &nbsp;
          <a href="/notes" className="link-danger">
            details
          </a>
        </form>
      </center>
    </div>
  );
};

export default Login;
