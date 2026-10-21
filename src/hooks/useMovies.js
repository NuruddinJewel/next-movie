import { useState, useEffect } from "react";
import { fetchPopularMovies, searchMovies } from "../utils/api";

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const data = query.trim()
          ? await searchMovies(query)
          : await fetchPopularMovies();
        if (!cancelled) setMovies(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 500);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  return { movies, loading, error };
};

export default useMovies;