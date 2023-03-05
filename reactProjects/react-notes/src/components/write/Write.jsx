import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./write.css";

export default function Write(props) {
  let location = useLocation()

  console.log(location.state, " useLocation Hook");

  let noteId = (location.pathname.split("/")[2] == 'create' ? false : location.pathname.split("/")[2])
  const [noteData, setNoteData] = useState({})
  

  useEffect(() => {
    const getNote = async () => {
      await axios.get("http://localhost:3000/notes/" + noteId).then(res => {
        setNoteData(res.data)
      })
    }
    getNote()
  }, [noteId])

  const updateNoteData =async (e) => {
    e.preventDefault();
    var {nodeId, ...other} = noteData
    await axios.put("http://localhost:3000/notes/" + noteId, other).then(res => {
      window.location.replace("/notes")
    })
  }
  const addNoteData = async (e) => {
    e.preventDefault();

    const weekday = [["#cfead9"], ["#ebcd96"], ["white"], ["pink"], ["#ebcd96"], ["white"], ["white"]]
    const d = new Date();
    let day = weekday[d.getDay()]
    let dateFormat = d.toLocaleDateString();
    var userr = JSON.parse(localStorage.getItem("user"))

    let temp = { ...noteData, 'username' : userr.username, date: dateFormat, color: day[0] }

    console.log(temp, userr, "temp data to post ")
    await axios.post("http://localhost:3000/notes/create", temp).then(res => {
       window.location.replace("/notes")
    })

  }


  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={noteData ? noteData.title : location.state.title}
            onChange={(e) => {
              setNoteData({ ...noteData, title: e.target.value });

            }}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Add your Note..."
            type="text"
            value={noteData ? noteData.desc : location.state.desc}
            onChange={(e) => {
              setNoteData({ ...noteData, desc: e.target.value })
            }}
            autoFocus={true}
          />
        </div>
        {noteId ? (<button className="writeSubmit" type="submit" onClick={(e) => { updateNoteData(e) }}>
          update
        </button>) :
          (<button className="writeSubmit" type="submit" onClick={(e) => addNoteData(e)}>
            add
          </button>)}
      </form>
    </div>
  );
}
