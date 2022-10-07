import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Button } from "antd";

export default function Genres() {
  const [genreMovie, setGenreMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=8aced447ac0b69fe5ae000b735a3adef&language=en-US`)
      .then((response) => {
        setGenreMovie(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 8,
    swipeToSlide: true,
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <Slider {...settings}>
        {genreMovie.map((movie) => {
          return (
            <Button style={{ height: 50 }}>
              <h4 style={{ textAlign: "center", cursor: "pointer" }}> {movie.name}</h4>
            </Button>
          );
        })}
      </Slider>
    </div>
  );
}
