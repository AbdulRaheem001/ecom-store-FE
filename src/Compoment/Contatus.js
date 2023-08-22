import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useParams} from "react-router-dom";
import "../Styles/Contatus.css"; // Import your custom CSS file for additional styling
import Navigation from "./Navigation";
function Contatus() {
  
  return (
    <>
    <Navigation />
    <div className="contatus-container">

      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter the subject" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

export default Contatus;
