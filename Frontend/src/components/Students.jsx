import React, { useEffect, useState } from 'react'
import {getStudents} from '../services/StudentServices'
import Table from 'react-bootstrap/Table';


const Students = () => {
  const [students,setStudents] = useState([]);

  useEffect(()=>{
    let mounted = true
    getStudents()
      .then(data =>{
        if(mounted){
          setStudents(data)
        }
      })
    return ()=>mounted = false
  },[])

  return (
    <div className='row'>
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
        {students.map((std) =>       
            <tr key={std.id}>
              <td>{std.studentId}</td>
              <td>{std.FirstName}</td>
              <td>{std.LastName}</td>
              <td>{std.RegisterationNO}</td>
              <td>{std.Email}</td>
              <td>{std.Course}</td>
            </tr>
        )}
      </tbody>
    </Table>
    </div>
  )
}

export default Students