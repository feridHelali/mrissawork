import './App.css';
import AddPhoneFrom from './components/AddPhoneForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PhonesCatalog from './pages/PhoneCatalogPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPhoneFrom />} />
          <Route path="/catalog" element={<PhonesCatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
