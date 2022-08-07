import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import User from './components/user/User';



function App() {

  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())  
    .then(data => setUsers(data))
  }, [])
  //Add teamMember Event Handler//
  const addTeamMember = (name) => setTeam([...team, name]);

  //console.log(users);

  return (
    
    <div className="App">
      <div style={{"margin-left": "50px"}}>
        <h1>TEAM MEMBERS : {team.length}</h1>
        {
          team.map(tm => <p>{tm.name}, email: {tm.email}</p>)
        }
      </div>
      {
        users.map((user) => <User user={user} addTeamMember = {addTeamMember}>{user}</User> )
      }
    </div>
  );
}

export default App;
