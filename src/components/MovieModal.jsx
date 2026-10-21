import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../utils/api";
import Loader from "./Loader";

const MovieModal = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [movieId]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-xl z-10"
        >
          ✕
        </button>

        {loading || !movie ? (
          <Loader />
        ) : (
          <div className="flex flex-col md:flex-row">
            <img
              src={
                movie.image?.original ||
                "https://placehold.co/500x750?text=No+Poster"
              }
              alt={movie.name}
              className="w-full md:w-72 object-cover md:rounded-l-2xl"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold">{movie.name}</h2>

              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 text-sm bg-red-600/20 text-red-400 rounded-full"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <div
                className="text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: movie.summary || "<p>No overview available.</p>",
                }}
              />

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <p>📅 {movie.premiered || "N/A"}</p>
                <p>⭐ {movie.rating?.average ?? "N/A"}</p>
                <p>⏱ {movie.runtime || movie.averageRuntime || "N/A"} min</p>
                <p>🌐 {movie.language || "N/A"}</p>
                <p>📺 {movie.status}</p>
                <p>🏷 {movie.type}</p>
              </div>

              {movie.officialSite && (
                <button
                //   href={movie.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-red-400 hover:underline"
                >
                  Official Site →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieModal;