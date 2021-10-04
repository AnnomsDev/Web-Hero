import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const SingIn = () => {
    return (
        <div className='mb-5 mt-5'>
            <Form className='w-50 p-5 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='hero-btn-primary border border-0 mb-5 mt-3' type="Submit">
                    Sign In
                </Button>
            </Form>
        </div>
    );
};

export default SingIn;