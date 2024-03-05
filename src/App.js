
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import HardwarePage from './pages/HardwarePage';
import CloudPage from './pages/CloudPage';
import DocumentationPage from './pages/DocumentationPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import SoftwarePage from './pages/SoftwarePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='software' element={< SoftwarePage />} />
        <Route path='hardware' element={<HardwarePage />} />
        <Route path="cloud" element={<CloudPage />} />
        <Route path='documentation' element={<DocumentationPage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
