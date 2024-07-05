import { useState } from "react";
import artistas_mockup from '../mockupServices/arlist.json';


// Lógica para obtener los artistas
//const data = await fetch("/api/artists").then((res) => res.json());
//setArtists(data);

const useFetchArtists = () => {
  const [artists, setArtists] = useState([]);

  const fetchArtists = () => {
    setArtists(artistas_mockup);
  };

  return { artists, fetchArtists };
};

export default useFetchArtists;
