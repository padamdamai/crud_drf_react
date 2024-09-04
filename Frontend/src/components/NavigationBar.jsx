import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src="./graduation.png" className='rounded-circle' height={50} width={50} alt="" />
            </Navbar.Brand>
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
                <NavLink to="/" className={({ isActive }) => isActive ? "activeClicked" : ""}>
                  <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>

                <NavLink to="/students" className={({ isActive }) => isActive ? "activeClicked" : ""}>
                  <CDBSidebarMenuItem icon="home">Student List</CDBSidebarMenuItem>
                </NavLink>

                <NavLink to="/management" className={({ isActive }) => isActive ? "activeClicked" : ""}>
                  <CDBSidebarMenuItem icon="user" iconType="solid">Manage students</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                className="sidebar-btn-wrapper text-white"
                style={{ padding: '20px 5px' }}
              >
                Sidebar Footer
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
