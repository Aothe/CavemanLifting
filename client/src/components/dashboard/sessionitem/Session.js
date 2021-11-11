import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Session.css';

export default function Session({ workout }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{workout.title}</Card.Title>
        <Card.Text>{workout.notes}</Card.Text>
        <Card.Text>{workout.date}</Card.Text>
        <Card.Text>{workout.routine[0].lift}</Card.Text>
        <Button variant="dark">Details</Button>
      </Card.Body>
    </Card>
  );
}
