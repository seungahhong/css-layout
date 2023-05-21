import { Route, Routes, NavLink } from 'react-router-dom';
import TossClone from './TossClone/TossClone';

function App() {
  return (
    <>
      <NavLink to={`${process.env.PUBLIC_URL}/toss`}>토스</NavLink>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/toss`}
          element={<TossClone />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<div>Clone Coding...</div>}
        />
      </Routes>
    </>
  );
}

export default App;
