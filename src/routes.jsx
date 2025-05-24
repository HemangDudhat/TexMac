import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ'; // ✅ Component imported with correct casing
import Home from './pages/Home';
import Services from './pages/Services';

export default function AppRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} /> {/* ✅ Fixed casing */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
   
  );
}
