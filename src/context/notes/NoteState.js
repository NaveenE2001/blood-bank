import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Get all Notes
  const getNotes = async () => {
    // API Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (
    usn,
    name,
    date,
    email,
    bloodgroup,
    branch,
    phoneno,
    addess
  ) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlYTgzNzE3NzY3Nzk1NWNmYjFmNmRhIn0sImlhdCI6MTY3NjMxMzg1Nn0.NjRVZx_prml8vDbYpq5UKL-vMo0S-gUSLOabN1W1RY0",
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
    const note = await response.json();
    setNotes(notes.concat(note));
    console.log(note);
  };
  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlYTgzNzE3NzY3Nzk1NWNmYjFmNmRhIn0sImlhdCI6MTY3NjMxMzg1Nn0.NjRVZx_prml8vDbYpq5UKL-vMo0S-gUSLOabN1W1RY0",
      },
    });
    const json = response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (
    id,
    usn,
    name,
    date,
    email,
    bloodgroup,
    branch,
    phoneno,
    addess
  ) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlYTgzNzE3NzY3Nzk1NWNmYjFmNmRhIn0sImlhdCI6MTY3NjMxMzg1Nn0.NjRVZx_prml8vDbYpq5UKL-vMo0S-gUSLOabN1W1RY0",
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
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].usn = usn;
        newNotes[index].name = name;
        newNotes[index].date = date;
        newNotes[index].email = email;
        newNotes[index].bloodgroup = bloodgroup;
        newNotes[index].branch = branch;
        newNotes[index].phoneno = phoneno;
        newNotes[index].addess = addess;

        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
