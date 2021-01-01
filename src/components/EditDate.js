import {useEffect, useState} from 'react';

function EditDate(props) {

  const [date, setDate] = useState({title: props.event.title, date: props.event.date, time: props.event.time});
  const changeDate = (e) =>{
    setDate({...date, date: e.target.value})
  }
  const changeTime = (e) =>{
    setDate({...date, time: e.target.value})
  }
  const changeTitle = (e) =>{
    setDate({...date, title: e.target.value})
  }
  const setData = () =>{
      //will submit change to database once endpoint is setup.
      props.changeEdit(); 
  }
  return (
    <div className="date">
      <h2>Event Name: <input onChange={changeTitle} type='text' value = {date.title}/></h2>  
      <h3>Date: <input onChange={changeDate} type='text' value = {date.date}/></h3>
      <h3>Time: <input onChange={changeTime}type='text' value = {date.time}/></h3>
      <button onClick={setData}>Submit Changes</button>
      <button onClick={props.changeEdit}>Cancel</button>
    </div>
  );
}

export default EditDate;
