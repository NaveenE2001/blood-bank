import React from "react";
import initial from "./initiat.png";
import "./App.css";

const Navbar = (props) => {
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-light bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <a className="navbar-brand" href="/about">
              about
            </a>
          </div>
        </nav>
      </div>

      <center>
        {" "}
        <div className="container my-5   ">
          <img
            src={initial}
            className="img-fluid img-thumbnail "
            style={{ width: 200, height: 250, borderRadius: 60 / 2 }}
            alt="..."
          />
          <br />
          <a href="/login">
            <button
              type="button"
              className="btn btn-outline-warning my-2 btn-lg"
            >
              {"   "}
              Login {"    "}
            </button>
          </a>
          <br />
          <div className="dropdown">
            <button
              type="button"
              className="dropbtn btn btn-outline-warning my-2 btn-lg"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Registration
            </button>
            <div className="dropdown-content">
              <a className="dropdown-item text-warning" href="/student">
                For Student
              </a>

              <a className="dropdown-item text-warning" href="/faculty">
                For Faculty
              </a>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Navbar;
