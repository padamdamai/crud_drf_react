import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from './components/Layouts';
import Home from './components/Home';
import Students from './components/Students';
import Management from './components/Management';

const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/management" element={<Management />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutePath;
