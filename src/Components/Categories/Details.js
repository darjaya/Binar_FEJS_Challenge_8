import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Paper } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import MenuPage from "../Menu/MenuPage";
import Button from "@mui/material/Button";
import { PlayCircleOutlined } from "@ant-design/icons";
import Genres from "../Core/Genres";

export default function Details() {
  const getBg = (Bgpath) => {
    return `https://www.themoviedb.org/t/p/original${Bgpath}`;
  };
  const [detailMovie, setDetailMovie] = useState([]);
  const params = useParams();

  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8aced447ac0b69fe5ae000b735a3adef&language=en-US`).then((response) => {
        setDetailMovie(response.data);
      });
    }
  }, [params.id]);
  return (
    <div>
      <div>
        <MenuPage />
        <Genres />
      </div>
      <div> </div>
      <Paper
        elevation={3}
        style={{
          border: "1px solid gray",
          margin: 15,
          height: 650,
          justifyContent: "center",
          textAlign: "start",
          backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMG_ORI}${detailMovie.backdrop_path})`,
        }}
      >
        <Row style={{ backgroundImage: `url(${getBg}/${detailMovie.backdrop_path})` }}>
          <Col md={3}>
            <img src={getPoster(detailMovie.poster_path)} alt="name" style={{ marginLeft: 15, marginTop: 15, width: 400, height: 600, borderRadius: 5, cursor: "pointer" }} />
          </Col>
          <Col>
            <h1 style={{ margin: 15, fontWeight: "bold" }}>{detailMovie.title || detailMovie.name} </h1>
            <p style={{ margin: 15 }}>
              {detailMovie.status}
              {", "}
              {detailMovie.release_date}{" "}
            </p>
            <h5 style={{ margin: 15, fontWeight: "bold" }}>
              Genre: <span style={{ color: "gray" }}> {detailMovie?.genres?.map((e) => e.name).join(", ")}</span>
            </h5>
            <h5 style={{ margin: 15, fontWeight: "bold" }}>Overview:</h5>
            <p style={{ margin: 15 }}>{detailMovie.overview}</p>
            <h5 style={{ margin: 15, fontWeight: "bold" }}>
              Production Companies: <span style={{ color: "gray" }}> {detailMovie?.production_companies?.map((e) => e.name).join(", ")}</span>
            </h5>

            <Button
              sx={{
                marginTop: 5,
                marginLeft: "15px",
                width: "25ch",
                borderRadius: "20px",
                fontSize: 15,
              }}
              variant="contained"
              size="small"
            >
              <PlayCircleOutlined style={{ marginRight: "5px" }} />
              WATCH TRAILER
            </Button>
          </Col>
        </Row>
      </Paper>
    </div>
  );
}
