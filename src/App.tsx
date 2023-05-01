import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TossClone from './TossClone/TossClone';

function App() {
  return (
    <Routes>
      <Route path="/toss" element={<TossClone />} />
      <Route path="/" element={<div>Clone Coding...</div>} />
    </Routes>
  );
}

export default App;
