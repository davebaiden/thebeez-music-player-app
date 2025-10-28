import { useRef, useState } from "react";
import "./MusicPlayer.css";

const MusicPlayer = ({ song, onNext }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <img src={song.album.cover_small} alt={song.title} />
      <div className="song-info">
        <p>{song.title}</p>
        <p>{song.artist.name}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={onNext}>⏭</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶️"}</button>
      </div>
      <audio ref={audioRef} src={song.preview} />
    </div>
  );
};

export default MusicPlayer;
