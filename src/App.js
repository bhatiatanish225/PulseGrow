import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeCreativeAgency from './pages/dark/home-creative-agency';

import PageContact from './pages/dark/page-contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCreativeAgency />} />
        <Route path='/contact' element={<PageContact/>}/>
       
       
      </Routes>
    </Router>
  );
}

export default App;
