import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/About';

import Contact from './Pages/Contact';
import Book from './Pages/Book';
import Stay from './Pages/Stay';
import Activities from './Pages/Activities';
import Footer from './components/Footer';




function App() {
  return (
    <div>
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About/>} />
                <Route path="/Stay"  element={<Stay/>} />
                <Route path="/Activities"  element={<Activities/>} />
                <Route path="/Book" element={<Book />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </Router>
        
        
        </div>
  );
}

export default App;
