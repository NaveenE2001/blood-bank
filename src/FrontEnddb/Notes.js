import React, { useContext, useState, useRef, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import image from "../FrontEnddb/heart.png";
import { useNavigate } from "react-router-dom";
//import Student from "./Student";

const Notes = () => {
  const Navigator = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      Navigator("login");
    }

    // eslint-disable-next-line
  }, []);
  const handleClicko = () => {
    localStorage.removeItem("token");
    Navigator("/login");
  };
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    eusn: "",
    ename: "",
    edate: "",
    eemail: "",
    ebloodgroup: "",
    ebranch: "",
    ephoneno: "",
    eaddess: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      eusn: currentNote.usn,
      ename: currentNote.name,
      edate: currentNote.date,
      eemail: currentNote.email,
      ebloodgroup: currentNote.bloodgroup,
      ebranch: currentNote.branch,
      ephoneno: currentNote.phoneno,
      eaddess: currentNote.addess,
    });
  };

  const handleClick = () => {
    editNote(
      note.id,
      note.eusn,
      note.ename,
      note.edate,
      note.eemail,
      note.ebloodgroup,
      note.ebranch,
      note.ephoneno,
      note.eaddess
    );
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  console.log(notes);
  return (
    <div
      style={{
        padding: "50px 0 50px 0",
        height: "auto",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex-container ">
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="usn" className="form-label">
                      usn
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eusn"
                      name="eusn"
                      value={note.eusn}
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ename"
                      name="ename"
                      value={note.ename}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="edate"
                      name="edate"
                      value={note.edate}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eemail"
                      name="eemail"
                      value={note.eemail}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bloodgroup" className="form-label">
                      bloodgroup
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ebloodgroup"
                      name="ebloodgroup"
                      value={note.ebloodgroup}
                      onChange={onChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="branch" className="form-label">
                      branch
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ebranch"
                      name="ebranch"
                      value={note.ebranch}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ephoneno" className="form-label">
                      phoneno
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ephoneno"
                      name="ephoneno"
                      value={note.ephoneno}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addess" className="form-label">
                      addess
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eaddess"
                      name="eaddess"
                      value={note.eaddess}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  disabled={note.eusn.length < 5 || note.ephoneno.length < 5}
                  onClick={handleClick}
                  type="button"
                  className="btn btn-primary"
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Details of donars
          </h1>
          <hr />
          <div className="container font-weight-bold ">
            {notes.length === 0 && "No notes to display"}
          </div>
          {notes.map((note) => {
            return (
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
        <button
          className="btn btn-primary justify-content-md"
          onClick={handleClicko}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Notes;
