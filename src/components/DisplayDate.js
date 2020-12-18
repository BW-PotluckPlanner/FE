import {useEffect, useState} from 'react';

function DisplayDate() {

  const [date, setDate] = useState({});
  const getData = () =>{
    setDate({date: '11/25', time: '12:00pm'})
  }
  useEffect(getData, []);
  return (
    <div className="date">
      <h2>Date: {date.date}</h2>
      <h2>Time: {date.time}</h2>
    </div>
  );
}

export default DisplayDate;
