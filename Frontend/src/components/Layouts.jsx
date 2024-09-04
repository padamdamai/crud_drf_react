import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Layouts = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet /> 
    </div>
  );
}

export default Layouts;
