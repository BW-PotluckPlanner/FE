import { useEffect, useState } from "react";
import "../App.css";

function ConfirmAttendance(props) {
  return (
    <div className="RSVP">
      {props.rsvp ? (
        <p className="good">
          You have confirmed you will be attending this event
        </p>
      ) : (
        <p className="warning">
          You have not yet confirmed you will be attending this event
        </p>
      )}
      <button onClick={props.changersvp}>Change Attendance Status</button>
    </div>
  );
}

export default ConfirmAttendance;
