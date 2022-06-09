import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=02689249b40636b114a2add6006bff65&language=en-US`
    )
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, []);

  console.log(Array.isArray(movie.genres) && movie.genres.map(el => el));
  return (
    <Container className="mt-5">
      <Row>
        <Col md="6">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width='400'
            height='500'
            alt=""
            style={{marginLeft:'100px'}}
          />
        </Col>
        <Col md="6">
          <h2 style={{textAlign:'justify'}}>{movie.title}</h2>
          <p style={{textAlign:'justify'}}>{movie.overview}</p>
          <ul>
            <li>Popularity:{movie.popularity}</li>
            <li>Original language:{movie.original_language}</li>
            <li>
              Generes:
              {Array.isArray(movie.genres) &&
                movie.genres.map(el => <span className="ml-2">{el.name}</span>)}
            </li>
            <li>Release date:{movie.release_date}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
