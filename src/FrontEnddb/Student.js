import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import "./App.css";
const Student = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [mystyle, setMystyle] = useState({
    borderColor: "cyan",
    borderWidth: 3,

    borderRadius: "20px",
    height: "50px",
    width: "100px",
    textAlign: "center",
    fontSize: "20px",
    border: "4px solid red",
  });
  if (mystyle.borderColor === "cyan") {
    setMystyle({
      borderColor: "red",
      borderWidth: 3,
      borderRadius: "20px",
      height: "50px",
      width: "100px",
      textAlign: "center",
      fontSize: "20px",
      border: "4px solid red",
    });
  }
  const [note, setNote] = useState({
    usn: "",
    name: "",
    date: "",
    email: "",
    bloodgroup: "",
    branch: "",
    phoneno: "",
    addess: "",
  });

  const handleonchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleonclick = (e) => {
    e.preventDefault();
    addNote(
      note.usn,
      note.name,
      note.date,
      note.email,
      note.bloodgroup,
      note.branch,
      note.phoneno,
      note.addess
    );
    setNote({
      usn: "",
      name: "",
      date: "",
      email: "",
      bloodgroup: "",
      branch: "",
      phoneno: "",
      addess: "",
    });
  };

  return (
    <>
      <div className="card-body">
        <div className="container">
          <center>
            <strong style={{ fontFamily: "tahomo", fontSize: "80px" }}>
              Student Details
            </strong>
            <form className="form-inline" action="" method="post">
              <div className="container-sm">
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="usn"
                  name="usn"
                  placeholder="Enter your USN  {eg:-1si21mc034}"
                  style={mystyle}
                  required
                  minLength={8}
                  value={note.usn}
                  onChange={handleonchange}
                />{" "}
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  style={mystyle}
                  value={note.name}
                  onChange={handleonchange}
                  required
                />{" "}
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="date"
                  placeholder=" Enter your DOB in this formate MM/DD/YYYY"
                  id="date"
                  name="date"
                  min="1997-01-01"
                  max="2030-12-31"
                  style={mystyle}
                  value={note.date}
                  onChange={handleonchange}
                  required
                />{" "}
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={note.email}
                  onChange={handleonchange}
                  style={mystyle}
                />{" "}
                <br />
                <select
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="bloodgroup"
                  name="bloodgroup"
                  placeholder="Enter your bloodgrop"
                  value={note.bloodgroup}
                  onChange={handleonchange}
                  style={mystyle}
                >
                  <option id="first" defaultValue=" Select Your Blood Group">
                    Select Your Blood Group
                  </option>
                  <option value="A Positive">A Positive</option>
                  <option value="A Negitive">A Negitive</option>
                  <option value="B+">B Positive</option>
                  <option value="B-">B Negitive</option>
                  <option value="AB-">AB Negitive</option>
                  <option value="AB+">AB Positive</option>
                  <option value="O-">O Negitive</option>
                  <option value="O+">O Positive</option>
                </select>
                <br />
                <select
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="branch"
                  name="branch"
                  placeholder="Enter your Branch"
                  value={note.branch}
                  onChange={handleonchange}
                  style={mystyle}
                >
                  <option id="branch" defaultValue="Select your Branch ">
                    Select your Branch
                  </option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                  <option value="M-TECH">M-Tech</option>
                  <option value="B-TECH">B-Tech</option>
                </select>
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="number"
                  id="phoneno"
                  name="phoneno"
                  placeholder="Enter your Phone number"
                  style={mystyle}
                  value={note.phoneno}
                  onChange={handleonchange}
                />{" "}
                <br />
                <textarea
                  className="form-outline w-50 h-50 mx-3 my-2 "
                  name="addess"
                  id="addess"
                  onChange={handleonchange}
                  placeholder="Enter your Parmanent Address"
                  style={mystyle}
                  value={note.addess}
                ></textarea>
                <br />
                <button
                  className="button btn btn-outline-success"
                  style={{ vertical: "align:middle" }}
                  onClick={handleonclick}
                >
                  <span>Submit </span>
                </button>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="btn btn-outline-info ">
                  Back to Homo
                </a>
              </div>
            </form>
          </center>
        </div>
      </div>
    </>
  );
};

export default Student;
