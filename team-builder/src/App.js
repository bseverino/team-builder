import React, { useState } from 'react';
import './App.css';
import data from './data.js';
import { Container } from 'reactstrap'

import MemberForm from './components/MemberForm';
import Team from './components/Team';

function App() {
  const [team, setTeam] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState({ name: '', email: '', role: '' });

  console.log(memberToEdit);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setTeam([...team, newMember])
  }

  const editMember = member => {
    setMemberToEdit(member);
  };

  return (
    <div className="App">
      <header>
        <h1>Team Builder</h1>
      </header>
      <Container>
        <MemberForm addNewMember={addNewMember} memberToEdit={memberToEdit} />
        <Team team={team} editMember={editMember} />
      </Container>
    </div>
  );
}

export default App;
