import { useState, useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const useAudioPlayer = () => {
  const { fetchSongs, isLoggedIn } = useContext(AppContext);

  const [audio, setAudio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchSongs()
        .then((fetchedSongs) => setSongs(fetchedSongs))
        .catch((error) => console.error("Error fetching songs:", error));
    }
  }, [isLoggedIn, fetchSongs]);

  const play = (url) => {
    if (currentSong !== url) {
      audio.pause();
      audio.src = url;
      audio.play();
      setCurrentSong(url);
      setPlaying(true);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const pause = () => {
    audio.pause();
    setPlaying(false);
  };

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
      audio.pause(); // Stop audio when the component is unmounted
    };
  }, [audio]);

  return { play, pause, playing, currentSong, songs };
};
