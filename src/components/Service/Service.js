import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Col>
      <Card className="service p-2 pb-3">
        <Card.Img
          className="w-50 mx-auto"
          style={{ height: '150px' }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="pb-4">{description}</Card.Text>
          <Link className="service-btn" to="/booking">
            Book Now
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
