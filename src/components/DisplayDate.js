import {useEffect, useState} from 'react';

function DisplayDate(props) {

  const [date, setDate] = useState({title: props.event.title, date: props.event.date, time: props.event.time});

  return (  
    <div className="date">
      <h2>{date.title}</h2>
      <h3>Date: {date.date}</h3>
      <h3>Time: {date.time}</h3>
      <button onClick={props.changeEdit}>Edit Event Info</button>
    </div>
  );
}

export default DisplayDate;
