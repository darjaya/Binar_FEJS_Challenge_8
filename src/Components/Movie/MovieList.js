import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import RendersMovie from "./RendersMovie";

function MovieList(props) {
  const [popular, setPopular] = useState([]);

  useEffect((movie_id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}7D?api_key=8aced447ac0b69fe5ae000b735a3adef&language=en-US`)
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="todo-group-form">
      <Container>
        <h1> Movie List </h1>
        <Row>
          {popular.map((movie) => {
            return <RendersMovie key={movie.id} movie={movie} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList;
