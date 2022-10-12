import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutRoutes from './LayoutRoutes';
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/*`} element={<LayoutRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
