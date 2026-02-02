import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectCaseStudy from "./pages/ProjectCaseStudy"; // ✅ ADD THIS

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import CursorFollower from "./components/common/CursorFollower";
import FloatingChat from "./components/common/FloatingChat";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            {/* ✅ CASE STUDY ROUTE */}
            <Route
              path="/projects/:id"
              element={<ProjectCaseStudy />}
            />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>

      {/* UI ENHANCEMENTS */}
      <CursorFollower />
      <FloatingChat />
    </div>
  );
}

export default App;
