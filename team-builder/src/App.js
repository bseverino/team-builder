import React, { useState } from 'react';
import './App.css';
import data from './data.js';

import Form from './components/Form';
import Team from './components/Team';

function App() {
  const [team, setTeam] = useState(data);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Team team={team} />
    </div>
  );
}

export default App;
