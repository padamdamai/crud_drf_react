import { useState,useEffect } from "react";
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Make sure Modal is imported from react-bootstrap
import axios from 'axios';


const AddStudentModel = (props) => {
  const { show, onHide, setUpdatedpage } = props; // Correctly pass the setUpdatedpage prop

  const handleSubmitform = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/students/', {
      studentId: null,
      FirstName: e.target.firstName.value,
      LastName: e.target.lastName.value,
      RegisterationNO: e.target.registrationNo.value,
      Email: e.target.email.value,
      Course: e.target.course.value
    })
    .then((result) => {
      alert('Student added successfully');
      setUpdatedpage(true); // Trigger the update in the parent component
      onHide(); // Close the modal after successful submission
    })
    .catch((error) => {
      alert('Failed to Add student');
    });
  };

  return (
    <div className="container">
      <Modal show={show} onHide={onHide} size='lg' centered >
        <Modal.Header closeButton className='bg-blue-950 text-white custom-modal-close'>
          <Modal.Title>Student form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmitform}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="firstName" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" name="lastName" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registrationNo">
              <Form.Label>Registration no</Form.Label>
              <Form.Control type="text" placeholder="Enter registration no" name="registrationNo" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="course">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" placeholder="Enter course name" name="course" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudentModel;
