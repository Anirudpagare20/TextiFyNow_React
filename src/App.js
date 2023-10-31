import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TextForm from './components/Text-Form';
// import './dark-mode.css';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter Text To Analyze" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
