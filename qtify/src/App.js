import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
const API_URL = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/albums/top`).then((res) => {
      console.log('top album',res.data);
      setTopAlbums(res.data);
    });
    axios.get(`${API_URL}/albums/new`).then((res) => {
      console.log('new album',res.data);
      setNewAlbums(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <AlbumCard /> */}
      <Section title={"Top Albums"} data={topAlbums} />
      <Section title={"New Albums"} data={newAlbums} />
    </div>
  );
}

export default App;
