import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Regist from './Regist.jsx';
import About from './about.jsx';
import Shome from './studentpages/Shome.jsx';
import Tregpg from './studentpages/Tregpg.jsx';
import Vregpg from './studentpages/Vregpg.jsx';
import Ohome from './organizerpages/Ohome.jsx';
import Hosthk from './organizerpages/hosthk.jsx';
import Revappro from './organizerpages/revappro.jsx';
import Approreg from './organizerpages/approreg.jsx';
import Ahome from './adminpages/Ahome.jsx';
import NotFound from './components/NotFound';  // Import NotFound component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/about" element={<About />} />
        <Route path="/shome" element={<Shome />} />
        <Route path="/tregpg" element={<Tregpg />} />
        <Route path="/vregpg" element={<Vregpg />} />
        <Route path="/ohome" element={<Ohome />} />
        <Route path="/hosthk" element={<Hosthk />} />
        <Route path="/revappro" element={<Revappro />} />
        <Route path="/approreg" element={<Approreg />} />
        <Route path="/ahome" element={<Ahome />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all route for undefined paths */}
      </Routes>
    </Router>
  );
}

export default App;
