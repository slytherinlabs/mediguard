import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Waitlist from "./pages/Waitlist";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route
          path="*"
          element={
            <div className="flex flex-1 flex-col items-center justify-center gap-4 pt-32 pb-20 text-center">
              <span className="text-6xl">🔍</span>
              <h2 className="text-2xl font-bold text-zinc-100">
                Page not found
              </h2>
              <p className="text-sm text-zinc-400">
                The page you're looking for doesn't exist yet.
              </p>
              <a
                href="/"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-50 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-white"
              >
                Go home →
              </a>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
