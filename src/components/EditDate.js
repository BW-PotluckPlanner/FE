import {useEffect, useState} from 'react';
import axiosWithAuth from '../api/axiosWithAuth';
function EditDate(props) {

  const [date, setDate] = useState({title: props.event.name, date: props.event.date, time: props.event.time_start, end: props.event.time_end, description: props.event.description});
  const changeDate = (e) =>{
    setDate({...date, date: e.target.value})
  }
  const changeTime = (e) =>{
    setDate({...date, time: e.target.value})
  }
  const changeEnd = (e) =>{
    setDate({...date, end: e.target.value})
  }
  const changeTitle = (e) =>{
    setDate({...date, title: e.target.value})
  }
  const changeDes = (e) =>{
    setDate({...date, title: e.target.description})
  }
  const setData = () =>{
      axiosWithAuth().put(`api/potluck/${props.event.id}`, {"name": date.title, "date": date.date, "time_start": date.time, "time_end": date.end, "description": date.description}).then(res =>{
        console.log(res.data.data)
        props.changeEdit();
        window.location.reload(false);
      })
       
  }
  return (
    <div className="date">
      <h2>Event Name: <input onChange={changeTitle} type='text' value = {date.title}/></h2>  
      <h3>Date: <input onChange={changeDate} type='text' value = {date.date}/></h3>
      <h3>Start Time: <input onChange={changeTime}type='text' value = {date.time}/></h3>
      <h3>End Time: <input onChange={changeEnd}type='text' value = {date.end}/></h3>
      <h3>Description: <input onChange={changeDes}type='text' value = {date.description}/></h3>
      <button onClick={setData}>Submit Changes</button>
      <button onClick={props.changeEdit}>Cancel</button>
    </div>
  );
}

export default EditDate;
