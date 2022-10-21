import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { Paper, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Genres from "../Movie/Genres";

function PopularMovie(props) {
  const [popular, setPopular] = useState([]);

  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=8aced447ac0b69fe5ae000b735a3adef&language=en-US&page=1`)
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <Genres />
      </div>
      <div>
        <Paper style={{ border: "1px solid gray" }}>
          <Row md={6}>
            {popular.map((movie) => {
              return (
                <div>
                  <Paper style={{ margin: 15, width: 150, height: 200, borderRadius: 5, cursor: "pointer", justifyContent: "center", textAlign: "center" }}>
                    <Tooltip title={movie.title || movie.original_name}>
                      <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                        <img src={getPoster(movie.poster_path)} alt="name" style={{ marginTop: 10, width: 130, height: 180, borderRadius: 5, cursor: "pointer", justifyContent: "center", textAlign: "center" }} />
                      </Link>
                    </Tooltip>
                  </Paper>
                </div>
              );
            })}
          </Row>
        </Paper>
      </div>
    </div>
  );
}

export default PopularMovie;
