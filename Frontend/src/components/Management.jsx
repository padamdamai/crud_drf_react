import React, { useState, useEffect } from 'react'; // Add useState and useEffect
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { MdOutlineDeleteOutline, MdEditNote } from "react-icons/md";
import AddStudentModel from './AddStudentModel';
import UpdateStdModel from './UpdateStdModel';
import Sidebar from './Sidebar';

const Management = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [addModelShow, setAddModelShow] = useState(false);
  const [EditModelShow, SetEditModelShow] = useState(false);
  const [EditStudent, SetEditStudent] = useState(null); // Updated to null to prevent initial rendering
  const [updatedPge, setUpdatedpage] = useState(false);


  const handleAdd = () => {
    setAddModelShow(true);
  };

  const handleUpdateStd = (e, std) => {
    e.preventDefault();
    SetEditModelShow(true);
    SetEditStudent(std); // Set the selected student
  };

  const handleDeleteStd = (e,studentId)=>{
    if(window.confirm("Are you sure to delete student ?")){
      e.preventDefault();
      axios.delete('http://127.0.0.1:8000/students/' + studentId + '/', {
      method:'DELETE',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
      })
      .then(response =>response.data)
      .then((result)=>{
        alert(result);
        setUpdatedpage(true)
      },
      (error) =>{
        alert('Failed to delete student')
      }
      )
    }

  }
  const handleClose = () => {
    setAddModelShow(false);
  };

  const EditModelClose = () => {
    SetEditModelShow(false);
    SetEditStudent(null); // Clear the selected student after closing
  };

  useEffect(() => {
    // Fetch students when the page is loaded or when the update is triggered
    if (!updatedPge) {
      axios.get('http://127.0.0.1:8000/students/')
        .then(response => {
          setStudents(response.data); // Set students from the API response
        })
        .catch(err => {
          console.error('Error fetching students:', err);
          setError('Failed to fetch students');
        });
      return;
    }
    setUpdatedpage(false); // Reset update state after fetching new students
  }, [updatedPge]); // Only refetch when updatedPge changes

  if (error) return <div>{error}</div>;

  return (
    <div className="flex manageContainer md:flex-row sm:flex-col ">
    <div className="sidebars_container d-flex sm:flex-row">
      <div>
      <Sidebar/>
      </div>
      <div className='md:hidden'>
      <img src="./stud4.png" width='680rem' height='' alt="" />
      <p className='p-4 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorem iure, voluptatum deleniti excepturi aut aperiam officiis reprehenderit aliquam accusantium. In quam impedit asperiores quia, aut soluta vero dolores quaerat modi numquam nostrum adipisci, doloremque omnis nesciunt error rem sed, laborum corporis commodi illum saepe suscipit consequuntur animi? Autem, suscipit.</p>

      </div>

    </div>
    <div className='p-8 sm:m-0'>
      <ButtonToolbar>
        <Button onClick={handleAdd} className='bg-green-500 w-[10rem] p-1 ms-0 rounded-sm'>Add new student</Button>
        <AddStudentModel show={addModelShow} onHide={handleClose} setUpdatedpage={setUpdatedpage} />
      </ButtonToolbar>
      <div className='bg-gray-900 text-white text-center p-2  w-[100%]'>Student</div>

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
            <tr key={std.studentId}>
              <td>{std.studentId}</td>
              <td>{std.FirstName}</td>
              <td>{std.LastName}</td>
              <td>{std.RegisterationNO}</td>
              <td>{std.Email}</td>
              <td>{std.Course}</td>
              <td className='d-flex flexBTN gap-2 sm:gap-1 sm:flex-col md:flex-row'>
                <ButtonToolbar>
                  <Button  onClick={e => handleUpdateStd(e, std)}>
                    <MdEditNote className='fs-6' />
                  </Button>
                </ButtonToolbar>
                <Button  onClick={e => handleDeleteStd(e,std.studentId)}  className='w-10 bg-red-600 active:bg-red-400 hover:bg-yellow-400' >
                  <MdOutlineDeleteOutline className='fs-6'  />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Render the UpdateStdModel outside the .map() loop */}
      {EditStudent && (
        <UpdateStdModel
          show={EditModelShow}
          student={EditStudent}
          onHide={EditModelClose}
          setUpdatedpage={setUpdatedpage}
        />
      )}
    </div>
    </div>
  );
};

export default Management;
