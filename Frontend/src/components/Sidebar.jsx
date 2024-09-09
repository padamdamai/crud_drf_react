import React from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
    <div className='md:h-screen sm:h-full'>
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
               Oxford College
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
    </>
  )
}

export default Sidebar