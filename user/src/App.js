import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';

const App = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/employees"/> } />
        <Route path="/employees" exact element={ <Home/> } />
        <Route path="/employees/search" exact element={ <Home/>} />
      </Routes>
  </BrowserRouter>
);

export default App;