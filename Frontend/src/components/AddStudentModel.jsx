import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddStudentModel = (props) => {
  const { show, onHide } = props;

  return (
<div className="container">
<Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
</div>
  );
};

export default AddStudentModel;
