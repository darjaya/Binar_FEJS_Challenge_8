import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Col, Tooltip } from "antd";
import { Paper } from "@mui/material";
import { Row } from "react-bootstrap";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

const SliderMovie = () => {
  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  const [popular, setPopular] = useState([]);

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
            {popular.map((movie) => {
              return (
                <Tooltip title={movie.title || movie.original_name}>
                  <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                    <img src={getPoster(movie.poster_path)} alt="name" style={{ margin: 20, width: 130, height: 180, borderRadius: 5, cursor: "pointer" }} />
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
              </Link>{" "}
            </Col>
          </Row>
          <Slider {...settings}>
            {trending.map((movie) => {
              console.log(movie.title);
              return (
                <Tooltip title={movie.title || movie.original_name}>
                  <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                    <img src={getPoster(movie.poster_path)} alt="name" style={{ margin: 20, width: 130, height: 180, borderRadius: 5, cursor: "pointer" }} />
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

export default SliderMovie;
