import React, { useEffect } from "react";
import Slider from "react-slick";
import { Button, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecomendations } from "../../Redux/Action/Action";
import { Col, Row } from "react-bootstrap";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { Link } from "react-router-dom";

const RecomendationMovie = (id) => {
  const dispatch = useDispatch(id);

  const { recomendations } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getAllRecomendations(2));
  }, [dispatch, id]);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return (
    <div>
      <Paper elevation={3} style={{ marginBottom: 50 }}>
        <Slider {...settings}>
          {recomendations?.results?.map((movie) => {
            return (
              <>
                <Paper style={{ height: "700px", backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMG_ORI}${movie.backdrop_path})` }}>
                  <Row>
                    <Col md={2} style={{ marginTop: "80px", justifyContent: "end", margin: 30, fontWeight: "bold", color: "white" }}>
                      <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                        <Paper style={{ marginLeft: 30, width: 200, height: 300, borderRadius: 5, cursor: "pointer" }}>
                          <img src={`${process.env.REACT_APP_MOVIE_IMG_ORI}${movie.poster_path}`} alt="name" style={{ width: 200, height: 300, borderRadius: 5, cursor: "pointer" }} />
                        </Paper>
                      </Link>
                    </Col>
                    <Col md={8} style={{ marginTop: "80px", textAlign: "left", color: "white", margin: 30 }}>
                      <h1 style={{ fontWeight: "bold" }}>{movie.title || movie.name} </h1>
                      <h2> {movie.release_date}</h2>
                      <Button
                        sx={{
                          marginTop: 5,
                          width: "25ch",
                          borderRadius: "5px",
                          fontSize: 15,
                        }}
                        variant="contained"
                        size="medium"
                      >
                        <PlayCircleFilledWhiteIcon style={{ marginRight: "5px" }} />
                        WATCH TRAILER
                      </Button>
                      <br></br>
                      <Link style={{ textDecoration: "none" }} to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                        <Button
                          sx={{
                            marginTop: 5,
                            width: "25ch",
                            borderRadius: "5px",
                            fontSize: 15,
                          }}
                          variant="contained"
                          size="medium"
                        >
                          details
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ color: "white", justifyContent: "center", margin: 25, fontWeight: "bold" }}>
                      <h3>Overview:</h3>
                      <h4>
                        <strong>{movie.overview}</strong>
                      </h4>
                    </Col>
                  </Row>
                </Paper>
              </>
            );
          })}
        </Slider>
      </Paper>
    </div>
  );
};

export default RecomendationMovie;
