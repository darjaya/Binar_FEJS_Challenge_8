import React, { useEffect } from "react";
import Slider from "react-slick";
import { Paper, Tooltip } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPopular, getAllTrending } from "../../Redux/Action/Action";

const VarMovie = () => {
  const dispatch = useDispatch();

  const { populars, trendings } = useSelector((state) => state.movie);
  // const { trendings } = useSelector((state) => state.trending);

  useEffect(() => {
    dispatch(getAllPopular());
    dispatch(getAllTrending());
  }, [dispatch]);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 8,
    swipeToSlide: true,
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginTop: 100 }}>
        <Paper elevation={3} style={{ margin: 35, marginBottom: 50 }}>
          <Row md={2}>
            <Col>
              <h4 style={{ textAlign: "start", marginLeft: 30, marginTop: 20 }}> Popular Movie</h4>
            </Col>
            <Col>
              <Link to="movie/popular" style={{ textDecoration: "none" }}>
                <p style={{ textAlign: "end", color: "#dc143c", cursor: "pointer", marginRight: 30, marginTop: 20 }}>
                  See All Movie <ArrowForwardRoundedIcon />
                </p>
              </Link>
            </Col>
          </Row>
          <Slider {...settings}>
            {populars?.results?.map((movie) => {
              return (
                <Tooltip title={movie.title || movie.original_name}>
                  <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                    <img src={`${process.env.REACT_APP_MOVIE_IMG_ORI}${movie.poster_path}`} alt="name" style={{ margin: 20, width: 130, height: 180, borderRadius: 5, cursor: "pointer" }} />
                  </Link>
                </Tooltip>
              );
            })}
          </Slider>
        </Paper>
      </div>
      <div style={{ marginTop: 100 }}>
        <Paper elevation={3} style={{ margin: 35, marginBottom: 50 }}>
          <Row md={2}>
            <Col>
              <h4 style={{ textAlign: "start", marginLeft: 30, marginTop: 20 }}> Trending Movie</h4>
            </Col>
            <Col>
              <Link to="movie/trending" style={{ textDecoration: "none" }}>
                <p style={{ textAlign: "end", color: "#dc143c", cursor: "pointer", marginRight: 30, marginTop: 20 }}>
                  See All Movie <ArrowForwardRoundedIcon />{" "}
                </p>
              </Link>
            </Col>
          </Row>
          <Slider {...settings}>
            {trendings?.results?.map((movie) => {
              return (
                <Tooltip size="medium" title={movie.title || movie.original_name}>
                  <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                    <img src={`${process.env.REACT_APP_MOVIE_IMG_ORI}${movie.poster_path}`} alt="name" style={{ margin: 20, width: 130, height: 180, borderRadius: 5, cursor: "pointer" }} />
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

export default VarMovie;
