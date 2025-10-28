import SearchBar from "../components/SearchBar";

function HomePage() {
  const handleSearch = (searchTerm) => {
    console.log("Search for:", searchTerm);
  };

  return (
    <div>
      <h1>The Beez Music Player 🎶🐝</h1>
      <p>Search and play your favorite tracks from the hive!</p>

      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default HomePage;
