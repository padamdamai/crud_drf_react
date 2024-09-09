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
              OXFORD Student
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigationBar;
