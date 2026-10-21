import { useState } from "react";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition ${
      isActive ? "text-red-500" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-red-500">
          🎬 MovieExplorer
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/movies" className={linkClass}>Movies</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <Link
            to="/movies"
            className="ml-4 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold transition"
          >
            Browse Movies
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1 border-t border-gray-800">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/movies" onClick={() => setOpen(false)} className={linkClass}>Movies</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About Us</NavLink>
          <Link
            to="/movies"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-red-600 py-3 rounded-lg font-semibold"
          >
            Browse Movies
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;