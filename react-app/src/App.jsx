import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Counter from './components/counter';
import Table from './components/table';

const App = () => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
