import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import RD from "./pages/RD";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<div style={{paddingTop:"80px"}}><ServicesPage /></div>} />
          <Route path="/services/:id" element={<div style={{paddingTop:"80px"}}><ServiceDetail /></div>} />
          <Route path="/products" element={<div style={{paddingTop:"80px"}}><Products /></div>} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<div style={{paddingTop:"80px"}}><About /></div>} />
          <Route path="/blogs" element={<div style={{paddingTop:"80px"}}><Blogs /></div>} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/rd" element={<div style={{paddingTop:"80px"}}><RD /></div>} />
          <Route path="/contact" element={<div style={{paddingTop:"80px"}}><Contact /></div>} />
          <Route path="/industries" element={<div style={{paddingTop:"80px"}}><Industries /></div>} />
          <Route path="/industries/:id" element={<div style={{paddingTop:"80px"}}><IndustryDetail /></div>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
