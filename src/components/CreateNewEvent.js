import {useEffect, useState} from 'react';
import '../App.css'
function CreateNewEvent(props) {
  const [create, setCreate] = useState(false);
  const changeCreate = () =>{
    setCreate(!create);
  }
  const [date, setDate] = useState({title: '', date: '', time: ''});
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
      changeCreate(); 
  }
  return (  
    <div className="create">
        {!create && <button onClick={changeCreate}>Create New Event</button>}
        {create &&<h2>Event Name: <input onChange={changeTitle} type='text' value = {date.title}/></h2>}
        {create &&<h3>Date: <input onChange={changeDate} type='text' value = {date.date}/></h3>}
        {create &&<h3>Time: <input onChange={changeTime} type='text' value = {date.time}/></h3>}
        {create && <button onClick={setData}>Create Event</button>}
        {create && <button onClick={changeCreate}>Cancel</button>}
    

    </div>
  );
}

export default CreateNewEvent;
