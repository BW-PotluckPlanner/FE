import DisplayDate from './DisplayDate';
import EditDate from './EditDate';
import ConfirmAttendance from './ConfirmAttendance';
import axiosWithAuth from '../api/axiosWithAuth';
import {useEffect, useState} from 'react';

function Event(props) {
  const [editdate, setEditdate] = useState(true);
  const [rsvp, setrsvp] = useState(props.event.isAttending === "yes"? true : false);
  console.log(props.event.isAttending);
  console.log(rsvp);


  const changeEditDate = () =>{
    setEditdate(!editdate);
  }
  const changersvp = () =>{
    const id = localStorage.getItem("userId");
    console.log({"rsvpId": rsvp ? 2 : 1, "userId": id})
    axiosWithAuth().put(`api/potluck/${props.event.id}/RSVP`, {"rsvpId": rsvp ? 2 : 1, "userId": id}).then(res =>{ 
      console.log(res.data);
      setrsvp(!rsvp);
    })
  }
  
  const validateToken => (err, response, body){
    var token = JSON.parse(body);
    var tokenValid = false;
    var clientIdValid = token.client_id === process.env.OIDC_CLIENT_ID;
    console.log(token.client_id)
    console.log(process.env.OIDC_CLIENT_ID)
    var currentTimestamp = new Date().getTime() / 1000;
    var tokenIsNotExpired = token.exp > currentTimestamp;
    tokenValid = clientIdValid && tokenIsNotExpired 
    return tokenValid;
  });
});

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
