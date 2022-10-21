import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Button } from "@mui/material";

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
    slidesToShow: 7,
    swipeToSlide: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {genreMovie.map((movie) => {
          return (
            <Button style={{ height: 20, width: 100 }}>
              <h5 style={{ textAlign: "center", cursor: "pointer", border: "1px solid gray", marginTop: 5 }}> {movie.name}</h5>
            </Button>
          );
        })}
      </Slider>
    </div>
  );
}
