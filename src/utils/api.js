const BASE_URL = "https://api.tvmaze.com";

export const fetchPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/shows?page=0`);
  if (!res.ok) throw new Error("Failed to fetch shows");
  const data = await res.json();

  return data
    .filter((s) => s.image)
    .sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
    .slice(0, 40);
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Search failed");
  const data = await res.json();

  const q = query.trim().toLowerCase();

  return data
    .map((item) => item.show)
    .filter((show) => show.image && show.name.toLowerCase().includes(q))
    .sort((a, b) => {
      const an = a.name.toLowerCase();
      const bn = b.name.toLowerCase();

      //exact match 
      if (an === q && bn !== q) return -1;
      if (bn === q && an !== q) return 1;

      //query
      const aStarts = an.startsWith(q);
      const bStarts = bn.startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (bStarts && !aStarts) return 1;

      //movie rating
      return (b.rating?.average || 0) - (a.rating?.average || 0);
    });
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  if (!res.ok) throw new Error("Failed to fetch details");
  return res.json();
};