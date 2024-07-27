import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useLocation, useNavigate } from "react-router-dom";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log("Button clicked!");
    setIsClicked(true);
  };

  return (
    <div
      className="card  "
      style={{
        display: "inline-block",
        width: "auto",
        margin: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        alignContent: "center",
      }}
    >
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{note._id}</h5>
          <i
            className="far fa-trash-alt mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fa-solid fa-thumbs-up"
            onClick={() => {
              navigate("/userdash", {
                state: {
                  note: { usn: note.usn },
                },
              });
              onchange = { handleClick };
            }}
          >
            <button disabled={isClicked}></button>
          </i>
          <i
            className="far fa-edit mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
        <b>
          {" "}
          <h2 className="card-text text-center">{note.usn}</h2>
        </b>
        <p className="card-text">{note._id}</p>
        <p className="card-text">{note.name}</p>
        <p className="card-text">{note.email}</p>
        <p className="card-text">{note.bloodgroup}</p>
        <p className="card-text">{note.branch}</p>
        <p className="card-text">{note.phoneno}</p>
        <p className="card-text">{note.address}</p>
      </div>
    </div>
  );
};

export default Noteitem;
