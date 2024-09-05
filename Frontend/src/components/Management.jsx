import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { MdOutlineDeleteOutline, MdEditNote } from "react-icons/md";
import AddStudentModel from './AddStudentModel';

const Management = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [addModelShow, setAddModelShow] = useState(false);

  const handleAdd = () => {
    setAddModelShow(true);
  };

  const handleClose = () => {
    setAddModelShow(false);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/students/')
      .then(response => setStudents(response.data))
      .catch(err => {
        console.error('Error fetching students:', err);
        setError('Failed to fetch students');
      });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className='row p-12'>
      <ButtonToolbar>
        <Button onClick={handleAdd} className='bg-green-500 w-[10rem] p-2 rounded-sm'>Add new student</Button>{" "}
        <AddStudentModel show={addModelShow} onHide={handleClose} />
      </ButtonToolbar>
      <div className='bg-gray-900 text-white text-center p-2'>Student</div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registration No</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(std => (
            <tr key={std.id}>
              <td>{std.studentId}</td>
              <td>{std.FirstName}</td>
              <td>{std.LastName}</td>
              <td>{std.RegisterationNO}</td>
              <td>{std.Email}</td>
              <td>{std.Course}</td>
              <td className='d-flex gap-2'>
                <Button><MdEditNote className='fs-5'/></Button>{' '}
                <Button className='bg-red-600 active:bg-red-400 hover:bg-yellow-400'>
                  <MdOutlineDeleteOutline className='fs-5' />{' '}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Management;
