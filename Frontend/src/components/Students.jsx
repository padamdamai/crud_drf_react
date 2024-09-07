import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

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
      <div className='bg-gray-900 text-center text-white p-2'>Students list</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registration No</th>
            <th>Email</th>
            <th>Course</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Students;

















