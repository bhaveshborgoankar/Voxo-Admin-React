import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutRoutes from './LayoutRoutes';
const Routers = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route exact path={`/*`} element={<LayoutRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
