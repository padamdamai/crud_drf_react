import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Sidebar from './Sidebar';

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
  <div className="flex w-full sm:flex-col studentList md:flex-row">
    <div className=" d-flex sm:flex-row">
      <div>
        <Sidebar/>
      </div>

      <div className='md:hidden'>
        <img src="./stud4.png" width='680rem' height='' alt="" />
      <p className='p-4 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorem iure, voluptatum deleniti excepturi aut aperiam officiis reprehenderit aliquam accusantium. In quam impedit asperiores quia, aut soluta vero dolores quaerat modi numquam nostrum adipisci, doloremque omnis nesciunt error rem sed, laborum corporis commodi illum saepe suscipit consequuntur animi? Autem, suscipit.</p>

      </div>

    </div>
    <div className='md:p-3 sm:p-11 studentT'>
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
    </div>
  );
};

export default Students;

















