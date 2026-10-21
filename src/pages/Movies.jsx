import { useState } from "react";
import useMovies from "../hooks/useMovies";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Loader from "../components/Loader";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, loading, error } = useMovies(query);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {query ? `Results for "${query}"` : "Popular Movies"}
      </h1>

      <SearchBar value={query} onChange={setQuery} />

      <div className="mt-10">
        {loading && <Loader />}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <p className="text-center text-gray-400">No movies found 😢</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onDetails={setSelectedId} />
            ))}
          </div>
        )}
      </div>

      {selectedId && (
        <MovieModal movieId={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </section>
  );
};

export default Movies;