import {useEffect, useState} from 'react';

function DisplayDate(props) {

  const [date, setDate] = useState({title: props.event.name, date: props.event.date, time: props.event.time_start, end: props.event.time_end, description: props.event.description});

  return (  
    <div className="date">
      <h2>{date.title}</h2>
      <h3>Date: {date.date}</h3>
      <h3>Start Time: {date.time}</h3>
      <h3>End Time: {date.end}</h3>
      <h3>Description: {date.description}</h3>
      <button onClick={props.changeEdit}>Edit Event Info</button>
    </div>
  );
}

export default DisplayDate;
