import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Carousel from "./pages/Carousel";
import Products from "./pages/Products";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/carousal" element={<Carousel />} />
      </Routes>
    </>
  );
}

export default App;
