import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MemberForm = props => {
    const [member, setMember] = useState({ name: '', email: '', role: '' });

    useEffect(() => {
        setMember(props.memberToEdit);
    }, [props.memberToEdit]);

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value  });
    };

    const submitForm = e => {
        e.preventDefault();

        if (props.memberToEdit.name === '') {            
            props.addNewMember(member);
        } else props.editMember(member);

        setMember({ name: '', email: '', role: '' });
    };

    return (
        <Row className="form-container">
            <Col xs='8' md='6' lg='4' >
                <Form className='member-form' onSubmit={submitForm}>
                    <FormGroup>
                        <Label htmlFor='name'>Name</Label>
                        <Input className='input' id='name' type='text' name='name' value={member.name} onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input className='input' id='email' type='text' name='email' value={member.email} onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='role'>Role</Label>
                        <Input className='input' id='role' type='text' name='role' value={member.role} onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup className='button-container'><Button className='button form-button' type='submit'>Submit</Button></FormGroup>
                </Form>
            </Col>
        </Row>
    );
};

export default MemberForm;