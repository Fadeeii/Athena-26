import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import CursorEffect from "./components/CursorEffect";
import FloatingBlobs from "./components/FloatingBlobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutIEEE from "./components/AboutIEEE";
import AboutWIE from "./components/AboutWIE";
import AboutAthena from "./components/AboutAthena";
import Events from "./components/Events";
import Venue from "./components/Venue";
import Tickets from "./components/Tickets";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success") => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      {/* Cinematic preloader */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-gradient-mesh text-slate-100 selection:bg-athena-purple/30 selection:text-athena-pink">
          {/* Subtle noise grain texture */}
          <div className="grain-overlay" />

          {/* Custom Toast Alerts */}
          <Toast toasts={toasts} removeToast={removeToast} />

          {/* Custom Trailing Mouse Glow */}
          <CursorEffect />

          {/* Glowing background ambient shapes */}
          <FloatingBlobs />

          {/* Navigation Bar */}
          <Navbar />

          {/* Main Layout Pages */}
          <main className="relative z-10 w-full overflow-hidden">
            {/* Hero Landing */}
            <Hero />

            {/* About IEEE Malabar */}
            <AboutIEEE />

            {/* About WIE Malabar */}
            <AboutWIE />

            {/* About ATHENA 2026 */}
            <AboutAthena />

            {/* Event Highlight Cards */}
            <Events />

            {/* Venue Highlight section */}
            <Venue />

            {/* Ticket Card Section */}
            <Tickets addToast={addToast} />

            {/* Coming Soon Updates */}
            <ComingSoon addToast={addToast} />
          </main>

          {/* Footer details */}
          <Footer />
        </div>
      )}
    </>
  );
}
