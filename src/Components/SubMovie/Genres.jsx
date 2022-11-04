import React, { useEffect } from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres } from "../../Redux/Action/Action";

export default function Genres() {
  const dispatch = useDispatch();

  const { genres } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 7,
    swipeToSlide: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {genres?.genres?.map((movie) => {
          return (
            <Button color="primary" style={{ height: 20, width: 100, backgroundColor: "blueviolet" }}>
              <h5 key={movie.id} style={{ textAlign: "center", cursor: "pointer", border: "1px solid gray", marginTop: 5 }}>
                {movie.name}
              </h5>
            </Button>
          );
        })}
      </Slider>
    </div>
  );
}
