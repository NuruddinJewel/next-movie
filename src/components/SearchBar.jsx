const SearchBar = ({ value, onChange }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍 Search movies by title..."
        className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 text-lg"
      />
    </div>
  );
};

export default SearchBar;