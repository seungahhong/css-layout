import { Route, Routes, NavLink } from 'react-router-dom';
import TossClone from './TossClone/TossClone';

function App() {
  return (
    <>
      <NavLink to="/toss">토스</NavLink>
      <Routes>
        <Route path="/toss" element={<TossClone />} />
        <Route path="/" element={<div>Clone Coding...</div>} />
      </Routes>
    </>
  );
}

export default App;
