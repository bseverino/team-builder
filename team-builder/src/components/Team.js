import React from 'react';

const Team = props => {
    return (
        <div className='member-list'>
            {props.team.map((member, index) => (
                <div className='member' key={index}>
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <p>{member.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;