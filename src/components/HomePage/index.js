import React, { useState, useEffect } from "react";
import axios from "axios";
import NowPlaying from "./nowplaying";
import { HomeWrapper } from "./style";

export default function HomePage() {
  const [nowPlaying, setnowPlaying] = useState([]);
 
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    const allMovies = await axios.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=02689249b40636b114a2add6006bff65&language=en-US&page=1`
      ),
      ]);
    setnowPlaying(allMovies[0].data.results);
    };

  return (
    <HomeWrapper>
      <NowPlaying movie={nowPlaying} />
    </HomeWrapper>
  );
}
