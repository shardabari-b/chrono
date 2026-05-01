import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ProductDetail from "./pages/ProductDetail";
import BlogDetail from "./pages/BlogDetail";
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
          {/* ── Single page — all sections live on Home ── */}
          <Route path="/" element={<Home />} />

          {/* ── Detail pages that still need their own route ── */}
          <Route path="/services/:id"    element={<ServiceDetail />} />
          <Route path="/products/:id"    element={<ProductDetail />} />
          <Route path="/blogs/:slug"     element={<BlogDetail />} />
          <Route path="/industries/:id"  element={<IndustryDetail />} />

          {/* ── Redirect old standalone routes → home ── */}
          <Route path="/services"    element={<Navigate to="/" replace />} />
          <Route path="/products"    element={<Navigate to="/" replace />} />
          <Route path="/about"       element={<Navigate to="/" replace />} />
          <Route path="/blogs"       element={<Navigate to="/" replace />} />
          <Route path="/rd"          element={<Navigate to="/" replace />} />
          <Route path="/contact"     element={<Navigate to="/" replace />} />
          <Route path="/industries"  element={<Navigate to="/" replace />} />
          <Route path="/home"        element={<Navigate to="/" replace />} />
          <Route path="*"            element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
