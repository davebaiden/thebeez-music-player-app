import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MusicPlayer from "./components/MusicPlayer";
import SongList from "./components/SongList";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSong, setCurrentSong] = useState(null);

  // Fetch popular songs
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
        );
        const data = await response.json();
        setSongs(data.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  // Handle search
  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`
      );
      const text = await response.text();
      const json = JSON.parse(text.replace(/^.+?\((.*)\);?$/, "$1"));
      setSongs(json.data);
    } catch (error) {
      console.error("Error searching songs:", error);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎧 Music Player</h1>

      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="text-center text-gray-400 mt-6">Loading songs...</p>
      ) : (
        <>
          <SongList songs={songs} setCurrentSong={setCurrentSong} />
          {currentSong && <MusicPlayer song={currentSong} />}
        </>
      )}
    </div>
  );
};

export default App;
