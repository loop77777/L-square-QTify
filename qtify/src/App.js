import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import FilterSection from "./components/FilterSection";
const API_URL = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/albums/top`).then((res) => {
      setTopAlbums(res.data);
    });
    axios.get(`${API_URL}/albums/new`).then((res) => {
      setNewAlbums(res.data);
    });
    axios.get(`${API_URL}/songs`).then((res) => {
      setSongs(res.data);
      setFilteredSongs(res.data);
    });
    axios.get(`${API_URL}/genres`).then((res) => {
      setGenres([{ key: "all", label: "All" }, ...res.data.data]);
    });
  }, []);

  return (
    <div className="App">
      <Header albums={[...topAlbums, ...newAlbums]} />
      <HeroSection />
      <Section
        title={"Top Albums"}
        data={topAlbums}
        enableAutoplay={true}
        isAlbum={true}
      />
      <Section title={"New Albums"} data={newAlbums} isAlbum={true} />
      <FilterSection
        title={"Songs"}
        data={filteredSongs}
        genres={genres}
        executeFilter={(genres) => {
          if (genres.includes("all")) {
            setFilteredSongs(songs);
          } else {
            setFilteredSongs(
              songs.filter((song) => genres.includes(song.genre.key))
            );
          }
        }}
        isAlbum={false}
      />
    </div>
  );
}

export default App;
