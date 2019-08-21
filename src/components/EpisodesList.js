import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  console.log("episodes", episodes);

  return (
    <section className="episode-list grid-view">
      <h2>
        {episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </h2>
    </section>
  );
}
