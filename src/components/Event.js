import DisplayDate from './DisplayDate';
import EditDate from './EditDate';
import ConfirmAttendance from './ConfirmAttendance';
import {useEffect, useState} from 'react';

function Event(props) {
  const [editdate, setEditdate] = useState(true);
  const [rsvp, setrsvp] = useState(props.event.rsvp);

  const changeEditDate = () =>{
    setEditdate(!editdate);
  }
  const changersvp = () =>{
    setrsvp(!rsvp);
    //will save this to database once endpoint is setup
  }

  return (
    <div className="Event"> 
        <hr></hr> 
        {editdate ? <DisplayDate event={props.event} changeEdit = {changeEditDate}/> : <EditDate event={props.event} changeEdit = {changeEditDate}/>} 
        <ConfirmAttendance rsvp={rsvp} changersvp={changersvp}/>
        <hr></hr>  
    </div>
  );
}

export default Event;
