import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import MenuPage from "../Menu/MenuPage";
import { Paper } from "@mui/material";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import Genres from "../Core/Genres";

function TrendingMovie(props) {
  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=8aced447ac0b69fe5ae000b735a3adef`)
      .then((response) => {
        setTrending(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="web-movie-app">
      <div>
        <MenuPage />
        <Genres />
      </div>
      <div>
        <Paper style={{ border: "1px solid gray" }}>
          <Row md={6}>
            {trending.map((movie) => {
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

export default TrendingMovie;
