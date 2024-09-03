import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const NavigationBar = () => {
  return (
   <>
   <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="./graduation.png" className='rounded-circle' height={50} width={50} alt="" /></Navbar.Brand>
          <Nav className="me-auto text-white">
            Student Management System
          </Nav>
        </Container>
      </Navbar>
      <div className='sidebar'>
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="user" iconType="solid">
              Manage students
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper text-white"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      </div>
    </div>
      

   </>
  )
}

export default NavigationBar