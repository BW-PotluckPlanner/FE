import Event from './Event';
import CreateNewEvent from './CreateNewEvent';
import {useEffect, useState} from 'react';


function Dashboard() {
  const [events, setEvents] = useState([]);
  const getData = () =>{
    //when endpoint is set up the data for the user's events will be pulled from database, for now I am setting it statically. 
    setEvents([{title: 'Family Dinner', date: '11/25', time: '12:00pm', rsvp: false}, {title: 'Friends Giving', date: '11/25', time: '12:00pm', rsvp: true}]);
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
