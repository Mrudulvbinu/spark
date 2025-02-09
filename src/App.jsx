import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ohome from './organizerpages/Ohome.jsx';
import Ahome from './adminpages/Ahome.jsx';
import Shome from './studentpages/Shome.jsx';
import Tregpg from './studentpages/Tregpg.jsx';
import Vregpg from './studentpages/Vregpg.jsx';
import Login from './Login.jsx';
import Regist from './Regist.jsx';
import About from './About.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shome" element={<Shome />} />
        <Route path="/tregpg" element={<Tregpg />} />
        <Route path="/vregpg" element={<Vregpg />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/ohome" element={<Ohome />} />
        <Route path="/ahome" element={<Ahome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;