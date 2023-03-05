import { useState } from "react";
import { a } from "react-router-dom";
import "./note.css";
import { BsPin } from "react-icons/bs"

export default function Note({ note, handleModal, noteIndex, handlePinNotes }) {

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      {/* <img
        className="noteImg"
        src={img}
        alt=""
      /> */}
      <div className="noteInfo"onClick={() => { handleModal(note) }} >
{/*         
        {note.pin === false &&
          <i className="fa-regular fa-bookmark pinIcon" onClick={() => { handlePinNotes(note) }}></i>
        }
        {note.pin === true &&
          <i className="fa-solid fa-thumbtack pinIcon" onClick={() => { handlePinNotes(note) }}></i>
        } */}

        <span className="noteTitle" >
          <a to="/note/abc" className="nav-link">
            {note.title}
          </a>
        </span>
        <span className="noteDate">1 hour ago</span>
        <p className="noteDesc">
          {note.desc}
        </p>
      </div>
      <div>

        {/* <Link className="link" to={`/write/${singleNote.noteId}`}>
        </Link> */}
        {/* <i className=" far fa-edit" ></i>
        <i className=" far fa-trash-alt" > </i> */}

      </div>
    </div>
  );
}