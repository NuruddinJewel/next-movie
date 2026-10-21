const MovieCard = ({ movie, onDetails }) => {
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 hover:-translate-y-1 transition flex flex-col">
      <img
        src={
          movie.image?.medium ||
          "https://placehold.co/210x295?text=No+Poster"
        }
        alt={movie.name}
        className="w-full aspect-[2/3] object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg line-clamp-1" title={movie.name}>
          {movie.name}
        </h3>
        <div className="flex justify-between text-sm text-gray-400 mt-1 mb-4">
          <span>{year}</span>
          <span>⭐ {rating}</span>
        </div>
        <button
          onClick={() => onDetails(movie.id)}
          className="mt-auto w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;