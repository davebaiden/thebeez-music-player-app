🎵 TheBeez Music Player
A React-based music player that fetches popular songs and allows you to search for tracks using the Deezer API. Play 30-second previews directly in the app and open full tracks on Deezer.
Features
•	Fetch and display popular songs on load.
•	Search for songs by title or artist.
•	Display song info: title, artist, album cover.
•	Play 30-second previews inside the app.
•	Navigate to full track on Deezer via a button.
•	Responsive design using Tailwind CSS.
•	Custom Play, Pause, and Next buttons for better control.
Installation
1. Clone the repository:
•	git clone https://github.com/davebaiden/thebeez-music-player-app.git
•	cd thebeez-music-player-app
2. Install dependencies:
•	npm install
3. Start the development server:
•	npm run dev
•	4. Open your browser at http://localhost:5173
Note: This project uses cors-anywhere to bypass CORS restrictions during development.
Project Structure
/src
  /components
    SearchBar.jsx
    SearchBar.css
    SongList.jsx
    SongList.css
    MusicPlayer.jsx
    MusicPlayer.css
  App.jsx
  index.jsx
  index.css
How to Use
1.	On page load, the app fetches popular songs from Deezer.
2.	Use the search bar to find specific songs.
3.	Click a song card to select and play its preview.
4.	Use the Play/Pause button to control playback.
5.	Click Next to play the next song in the list.
6.	To listen to the full track, click the 'Play Full Song' button to open it on Deezer.
Technologies Used
•	React.js
•	Axios
•	Tailwind CSS
•	Vite
•	Deezer API
Limitations
•	Deezer API only provides 30-second previews. Full tracks cannot be played directly in the app.
•	The app uses cors-anywhere for development, which may have request limits.
License
MIT License © 2025 David Baiden Amissah
