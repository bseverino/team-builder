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

  const enterEditMode = member => {
    setMemberToEdit(member);
  };

  const editMember = member => {
    const newTeam = [...team];
    const index = newTeam.findIndex(m => m.id === member.id)
    newTeam[index] = member;
    setTeam(newTeam);
    setMemberToEdit({ name: '', email: '', role: '' });
  };

  return (
    <div className="App">
      <header>
        <h1>Team Builder</h1>
      </header>
      <Container>
        <MemberForm addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
        <Team team={team} enterEditMode={enterEditMode} />
      </Container>
    </div>
  );
}

export default App;
