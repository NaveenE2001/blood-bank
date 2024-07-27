import React, { useState, useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { useLocation } from "react-router-dom";

const UserDash = (props) => {
  const location = useLocation();
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const notesInitial = [];
  const [notea, setNotea] = useState({
    usn: "",
    name: "",
    date: "",
    email: "",
    bloodgroup: "",
    branch: "",
    phoneno: "",
    addess: "",
  });
  const host = "http://localhost:5000";

  // console.log(notes);

  const { note } = location.state;
  const usn = note.usn;
  //console.log(notes);
  //console.table(usn);
  const filteritem = notes.filter((item) => {
    return item.usn === usn;
  });
  console.log(filteritem);
  console.log(typeof filteritem);
  console.log(filteritem.length);
  setNotea(notea.concat(filteritem));
  for (let i in filteritem) {
    console.log(i);
  }

  //const arr = Array.from(filteritem);
  {
    /*
  const addNotea = async (
    usn,
    name,
    date,
    email,
    bloodgroup,
    branch,
    phoneno,
    addess
  ) => {
    try {
      const response = await fetch(`${host}/api/adminlogin/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usn,
          name,
          date,
          email,
          bloodgroup,
          branch,
          phoneno,
          addess,
        }),
      });
      const res = await response.json();
      console.log(res);
      setNotea([...notea, res]);
    } catch (err) {
      console.error(err);
    }
  };
  //console.log(arr);
  useEffect(() => {
    localStorage.getItem("token");
    getNotes();
    fetch(`${host}/api/adminlogin/fetchallnotess`)
      .then((res) => res.json())
      .then((data) => setNotea(data));
    addNotea(usn, name, date, email, bloodgroup, branch, phoneno, addess);

    {
       localStorage.setItem("notea", JSON.stringify(filteritem));
    setNotea(filteritem);
    const notestring = localStorage.getItem("notea");
    const noteaa = JSON.parse(notestring);
  setNotea(notea.concat(noteaa));
    }
    //setNotea(notea.concat(filteritem));
  }, []);
  // setNotea(notea.concat(filteritem));
  //console.log(filteritem);
*/
  }
  console.log(notea);
  return (
    <div>
      {" "}
      <table class="table">
        <thead>
          <tr>
            {" "}
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {notea.map((item, index) => (
            <tr key={index}>
              {/*<td>{item.id}</td>*/}
              <td>{item.name}</td>
              <td>{item.usn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDash;
