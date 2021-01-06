import Event from './Event';
import CreateNewEvent from './CreateNewEvent';
import {useEffect, useState} from 'react';
import axiosWithAuth from '../api/axiosWithAuth';


function Dashboard() {
  const [events, setEvents] = useState([]);
  const id = localStorage.getItem("userId");
  console.log('userId', id);
  const getData = () =>{
    axiosWithAuth().get(`api/potluck/${id}/mypotlucks`).then(res =>{
      console.log(res.data);
      setEvents(res.data);
    })
  }

  useEffect(getData, []);

  return (
    <div className="Dashboard">
        <CreateNewEvent />
        {events.map(a => <Event event={a}/>)}
       
    </div>
  );
}

export default Dashboard;
