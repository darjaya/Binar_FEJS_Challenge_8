import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Box, Paper } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useDispatch, useSelector } from "react-redux";
import { getAllDetails } from "../../Redux/Action/Action";

export default function DetailMovie() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { details } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getAllDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <Paper>
        <>
          <Box
            elevation={3}
            style={{
              border: "1px solid gray",
              margin: 15,
              height: 650,
              justifyContent: "center",
              textAlign: "start",
              backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMG_ORI}${details.backdrop_path})`,
            }}
          >
            <Row>
              <Col md={3} style={{ marginTop: 15 }}>
                <Paper elevation={3} style={{ marginLeft: 15, marginTop: 15, width: 400, height: 600, borderRadius: 5, cursor: "pointer" }}>
                  <img src={`${process.env.REACT_APP_MOVIE_IMG_ORI}${details.poster_path}`} alt="name" style={{ width: 400, height: 600, borderRadius: 5, cursor: "pointer" }} />
                </Paper>
              </Col>
              <Col style={{ color: "#FF4500", margin: 35 }}>
                <h1 style={{ margin: 15, fontWeight: "bold" }}>{details.title || details.name} </h1>
                <p style={{ margin: 15 }}>
                  {details.status}
                  {", "}
                  {details.release_date}
                </p>
                <h5 style={{ margin: 15, fontWeight: "bold" }}>
                  Genre: <span style={{ color: "#FF4500" }}> {details?.genres?.map((e) => e.name).join(", ")}</span>
                </h5>
                <p style={{ margin: 15, fontWeight: "bold" }}>
                  <b>{details.vote_average}/10 </b>
                </p>
                <h5 style={{ margin: 15, marginTop: 50, fontWeight: "bold" }}>Overview:</h5>
                <h4 style={{ margin: 15 }}>{details.overview}</h4>
                <h5 style={{ margin: 15, fontWeight: "bold" }}>
                  Production Companies: <span style={{ color: "#FF4500" }}> {details?.production_companies?.map((e) => e.name).join(", ")}</span>
                </h5>
                <Button
                  sx={{
                    marginTop: 5,
                    marginLeft: "15px",
                    width: "25ch",
                    borderRadius: "5px",
                    fontSize: 15,
                  }}
                  variant="contained"
                  size="small"
                  // onClick={handleOpen}
                >
                  <PlayCircleFilledWhiteIcon style={{ marginRight: "5px" }} />
                  WATCH TRAILER
                </Button>
              </Col>
            </Row>
          </Box>
        </>
      </Paper>
    </div>
  );
}
