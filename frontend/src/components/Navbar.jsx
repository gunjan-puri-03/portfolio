import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          Gunjan Puri
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 py-4 flex flex-col gap-4 text-lg">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;