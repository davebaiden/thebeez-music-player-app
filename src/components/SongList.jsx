import "./SongList.css";

const SongList = ({ songs, setCurrentSong }) => {
  if (!songs || songs.length === 0) {
    return <p className="text-center text-gray-400 mt-6">No songs found.</p>;
  }

  return (
    <div className="song-list">
      {songs.map((song) => (
        <div
          key={song.id}
          className="song-card"
          onClick={() => setCurrentSong(song)}
        >
          <img src={song.album.cover_small} alt={song.title} />
          <p className="title">{song.title}</p>
          <p className="artist">{song.artist.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SongList;
