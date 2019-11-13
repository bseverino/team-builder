import React, { useState } from 'react';
import './App.css';
import data from './data.js';
import { Container } from 'reactstrap'

import MemberForm from './components/MemberForm';
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

  const memberToEdit = member => {

  };

  return (
    <div className="App">
      <header>
        <h1>Team Builder</h1>
      </header>
      <Container>
        <MemberForm addNewMember={addNewMember} />
        <Team team={team} />
      </Container>
    </div>
  );
}

export default App;
