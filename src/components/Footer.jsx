import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-bold text-red-500">
            🎬 MovieExplorer
          </Link>
          <p className="mt-3 text-gray-400 text-sm">
            Browse, search and explore movies and shows with ratings and
            details, all in one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-white transition">Movies</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Credit */}
        <div>
          <h4 className="font-semibold mb-3">Data Source</h4>
          <p className="text-gray-400 text-sm">
            Data provided by{" "}
            <a
              href="https://www.tvmaze.com"
              target="_blank"
              rel="noreferrer"
              className="text-red-400 hover:underline"
            >
              TVMaze API
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MovieExplorer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;