import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/ServicesPage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import RD from "./pages/RD";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/products" element={<div style={{paddingTop:"80px"}}><Products /></div>} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<div style={{paddingTop:"80px"}}><About /></div>} />
          <Route path="/blogs" element={<div style={{paddingTop:"80px"}}><Blogs /></div>} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/rd" element={<div style={{paddingTop:"80px"}}><RD /></div>} />
          <Route path="/contact" element={<div style={{paddingTop:"80px"}}><Contact /></div>} />
          <Route path="/industries" element={<div style={{paddingTop:"80px"}}><Industries /></div>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
