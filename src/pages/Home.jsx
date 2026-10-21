import { Link } from "react-router";
import heroImg from "../assets/hero.png";

const Home = () => {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-black/50" />

      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Discover Your Next <span className="text-red-500">Favorite Movie</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-8">
          Explore thousands of movies, search by title, check ratings and dive
          into details, all in one place.
        </p>
        <Link
          to="/movies"
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-lg font-bold transition"
        >
          Explore Movies →
        </Link>
      </div>
    </section>
  );
};

export default Home;