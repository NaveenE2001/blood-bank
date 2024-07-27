import React from "react";
import Faculty from "./FrontEnddb/Faculty";
import Login from "./FrontEnddb/Login";
import Navbar from "./FrontEnddb/Navbar";
import Student from "./FrontEnddb/Student";
import image from "./FrontEnddb/heart.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./FrontEnddb/Signup";
import NoteState from "./context/notes/NoteState";
import Notes from "./FrontEnddb/Notes";
import Noteitem from "./FrontEnddb/Noteitem";
import "./App.css";
import UserDash from "./FrontEnddb/UserDash";

const App = () => {
  return (
    <div
      className="img-fluid"
      style={{
        padding: "50px 0 50px 0",
        height: "1000px",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(${image})`,
      }}
    >
      <NoteState>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navbar title="Blood bank for SITANS" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/student" element={<Student />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notesitem" element={<Noteitem />} />
            <Route path="/userdash" element={<UserDash />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
};

export default App;
