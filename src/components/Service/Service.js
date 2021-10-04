import './Service.css'
import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Service = (props) => {
    const { title, details, img, instructor, price } = props.service;

    return (
        <Col>
            <Card className='service'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{title}</Card.Title>
                    <Card.Text>
                        <p>{details}</p>
                        <p><b>Instructor: {instructor}</b></p>
                        <h5>price: {price}</h5>
                        <button className='hero-btn-primary border border-0 mt-5'>Enroll Now</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;