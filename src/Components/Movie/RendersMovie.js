import * as React from "react";
import { Paper } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RendersMovie = ({ movie }) => {
  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  return (
    <div className="detilSearchPage" style={{ marginTop: 100, justifyContent: "center", height: 200 }}>
      <Paper elevation={2} style={{ marginTop: 150, margin: 5, marginLeft: 25, width: 460, height: 170, justifyContent: "center", textAlign: "start", border: "1px solid gray" }}>
        <Row style={{ marginTop: 10 }}>
          <Col md={3}>
            <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
              <img src={getPoster(movie.poster_path)} alt="name" style={{ marginLeft: 15, width: 100, height: 150, borderRadius: 5, cursor: "pointer" }} />
            </Link>{" "}
          </Col>
          <Col>
            <h3 style={{ margin: 20, fontWeight: "bold" }}>{movie.title} </h3>
            <p style={{ margin: 20, fontWeight: "bold" }}>Realease: {movie.release_date}</p>
          </Col>
        </Row>
      </Paper>
    </div>
  );
};

export default RendersMovie;
