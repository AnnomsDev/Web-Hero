import { Row } from 'react-bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';
import './Services.css'
import Service from '../Service/Service';

const Services = (props) => {
    const [services, setServices] = useState([]);

    let data=''
    props.home? data='/data.json' : data='/dataAll.json'


    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-5'>
            <div className="text-center">
                <h3 className='d-inline-block fw-bold p-2 mb-5 border-bottom border-2'>Services</h3>
            </div>
            <Row xs={1} md={2} className="g-5">
                {
                    services.map(service => <Service key={service.key} service={service}></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;