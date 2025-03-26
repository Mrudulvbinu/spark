import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Auth Pages
import Login from './Login.jsx';
import Regist from './register.jsx';

// Student Pages
import Shome from './studentpages/Shome.jsx';
import Tregpg from './studentpages/Tregpg.jsx';
import Vregpg from './studentpages/Vregpg.jsx';

// Organizer Pages
import Ohome from './organizerpages/Ohome.jsx';
import Hosthk from './organizerpages/hosthk.jsx';
import Revappro from './organizerpages/revappro.jsx';
import Approreg from './organizerpages/approreg.jsx';
import RegStud from './organizerpages/regstud.jsx';

// Admin Pages
import Ahome from './adminpages/Ahome.jsx';

// Other Pages
import About from './about.jsx';
import NotFound from './components/NotFound'; // Catch-all page for undefined routes

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/regist" element={<Regist />} />

        {/* General Routes */}
        <Route path="/about" element={<About />} />

        {/* Student Routes */}
        <Route path="/shome" element={<Shome />} />
        <Route path="/Tregpg/:hackathonId" element={<Tregpg />} />
        <Route path="/Vregpg/:hackathonId" element={<Vregpg />} /> 

        {/* Organizer Routes */}
        <Route path="/ohome" element={<Ohome />} />
        <Route path="/hosthk" element={<Hosthk />} />
        <Route path="/revappro" element={<Revappro />} />
        <Route path="/approreg" element={<Approreg />} />
        <Route path="/regstud/:hackathonId" element={<RegStud />} />


        {/* Admin Routes */}
        <Route path="/ahome" element={<Ahome />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
