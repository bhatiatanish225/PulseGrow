import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeCreativeAgency from './pages/dark/home-creative-agency';
import Hiring from './components/dark/creative-agency/Hiring'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCreativeAgency />} />
        <Route path="/hiring" element={< Hiring/>} />
      </Routes>
    </Router>
  );
}

export default App;
