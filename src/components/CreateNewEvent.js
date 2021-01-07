import { useEffect, useState } from "react";
import "../App.css";
import axiosWithAuth from "../api/axiosWithAuth";
function CreateNewEvent(props) {
  const [create, setCreate] = useState(false);
  const changeCreate = () => {
    setCreate(!create);
  };
  const [date, setDate] = useState({
    title: "",
    date: "",
    time: "",
    end: "",
    description: "",
  });
  const changeDate = (e) => {
    setDate({ ...date, date: e.target.value });
  };
  const changeTime = (e) => {
    setDate({ ...date, time: e.target.value });
  };
  const changeEnd = (e) => {
    setDate({ ...date, end: e.target.value });
  };
  const changeTitle = (e) => {
    setDate({ ...date, title: e.target.value });
  };
  const changeDes = (e) => {
    setDate({ ...date, description: e.target.value });
  };
  const setData = () => {
    const id = localStorage.getItem("userId");
    console.log({
      name: date.title,
      date: date.date,
      time_start: date.time,
      time_end: date.end,
      description: date.description,
      userId: id,
    });
    axiosWithAuth()
      .post("api/potluck", {
        name: date.title,
        date: date.date,
        time_start: date.time,
        time_end: date.end,
        description: date.description,
        userId: id,
      })
      .then((res) => {
        console.log(res.data);
        changeCreate();
        setDate({ title: "", date: "", time: "", end: "", description: "" });
        window.location.reload(false);
      });
  };
  return (
    <div className="create">
      {!create && <button onClick={changeCreate}>Create New Event</button>}
      {create && (
        <h2>
          Event Name:{" "}
          <input onChange={changeTitle} type="text" value={date.title} />
        </h2>
      )}
      {create && (
        <h3>
          Date: <input onChange={changeDate} type="text" value={date.date} />
        </h3>
      )}
      {create && (
        <h3>
          Start Time:{" "}
          <input onChange={changeTime} type="text" value={date.time} />
        </h3>
      )}
      {create && (
        <h3>
          End Time: <input onChange={changeEnd} type="text" value={date.end} />
        </h3>
      )}
      {create && (
        <h3>
          Description:{" "}
          <input onChange={changeDes} type="text" value={date.description} />
        </h3>
      )}
      {create && <button onClick={setData}>Create Event</button>}
      {create && <button onClick={changeCreate}>Cancel</button>}
    </div>
  );
}

export default CreateNewEvent;
