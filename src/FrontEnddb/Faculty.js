import React, { useState } from "react";

const Faculty = () => {
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
  return (
    <>
      <div className="card-body">
        <div className="container">
          <center>
            <strong style={{ fontFamily: "tahomo", fontSize: "80px" }}>
              Faculty Details
            </strong>
            <form className="form-inline" action="" method="post">
              <div class="container-sm">
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="fid"
                  name="fid"
                  placeholder="Enter your Faculty ID"
                  style={mystyle}
                  required
                  minLength={8}
                />{" "}
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  style={mystyle}
                  required
                />{" "}
                <br />
                <select
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="branch"
                  name="branch"
                  placeholder="Enter your Branch"
                  style={mystyle}
                >
                  <option id="first" value=" " selected>
                    Select Your Blood Group
                  </option>
                  <option value="A+">A Positive</option>
                  <option value="A-">A Negitive</option>
                  <option value="B+">B Positive</option>
                  <option value="B-">B Negitive</option>
                  <option value="AB-">AB Negitive</option>
                  <option value="AB+">AB Positive</option>
                  <option value="O-">O Negitive</option>
                  <option value="O+">O Positive</option>
                </select>
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  placeholder=" Enter your DOB in this formate MM/DD/YYYY"
                  onfocus="(this.type='date')"
                  id="dob"
                  name="date"
                  min="1997-01-01"
                  max="2030-12-31"
                  style={mystyle}
                  required
                />{" "}
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="enter your email"
                  style={mystyle}
                />{" "}
                <br />
                <select
                  className="form-outline w-50 mx-3 my-2"
                  type="text"
                  id="branch"
                  name="branch"
                  placeholder="Enter your Branch"
                  style={mystyle}
                >
                  <option id="first" value=" " selected>
                    Select your Branch
                  </option>
                  <option value="python">MCA</option>
                  <option value="c++">MBA</option>
                  <option value="java">M-Tech</option>
                  <option value="java">B-Tech</option>
                </select>
                <br />
                <input
                  className="form-outline w-50 mx-3 my-2"
                  type="number"
                  id="contect"
                  name="contect"
                  placeholder="Enter your Phone number"
                  style={mystyle}
                />{" "}
                <br />
                <textarea
                  className="form-outline w-50 h-50 mx-3 my-2 "
                  name="address"
                  id="addess"
                  placeholder="Enter your Parmanent Address"
                  style={mystyle}
                ></textarea>
                <br />
                <button
                  className="button btn btn-outline-success"
                  style={{ vertical: "align:middle" }}
                >
                  <span>Submit </span>
                </button>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="btn btn-outline-info btn-lg ">
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

export default Faculty;
