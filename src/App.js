import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeCreativeAgency from './pages/dark/home-creative-agency';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCreativeAgency />} />
       
       
      </Routes>
    </Router>
  );
}

export default App;
