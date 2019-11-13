import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Team = props => {
    return (
        <Row className="team-container">        
            {props.team.map((member, index) => (
                <Col className='member-list' xs='12' md='6' lg='4'>
                    <Card className='member' key={index}>
                        <CardBody className='member-body'>
                            <CardTitle className="member-name">{member.name}</CardTitle>
                            <CardText className="member-role">{member.role}</CardText>
                            <CardText className="member-email">{member.email}</CardText>
                            <div className='button-container'>
                                <Button className="button member-button">Edit Member</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Team;