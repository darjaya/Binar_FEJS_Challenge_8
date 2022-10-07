import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Tooltip } from "antd";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const ListMovie = () => {
  const [popular, setPopular] = useState([]);
  const getBg = (Bgpath) => {
    return `https://www.themoviedb.org/t/p/original${Bgpath}`;
  };
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=8aced447ac0b69fe5ae000b735a3adef&language=en-US`)
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <Paper elevation={3} style={{ marginBottom: 50 }}>
          <Slider {...settings}>
            {popular.map((movie) => {
              return (
                <Tooltip title={movie.title || movie.original_name}>
                  <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                    <img src={getBg(movie.backdrop_path)} alt="name" style={{ width: "100%", height: 500, borderRadius: 5, cursor: "pointer" }} />
                  </Link>
                </Tooltip>
              );
            })}
          </Slider>
        </Paper>
      </div>
    </div>
  );
};

export default ListMovie;
