import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Paper } from "@mui/material";

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
                <div>
                  <img src={getBg(movie.backdrop_path)} alt="name" style={{ width: "100%", height: 600, borderRadius: 5, cursor: "pointer" }} />
                </div>
              );
            })}
          </Slider>
        </Paper>
      </div>
    </div>
  );
};

export default ListMovie;
