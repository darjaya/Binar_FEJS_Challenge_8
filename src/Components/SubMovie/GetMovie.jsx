import React, { useEffect } from "react";
import { Paper, Tooltip } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies } from "../../Redux/Action/Action";

const RendersMovie = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  const { searchs } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getSearchMovies(query));
  }, [dispatch, query]);

  return (
    <div>
      <hr />
      <Paper
        style={{
          margin: 15,
          height: 50,
          borderRadius: 5,
          cursor: "pointer",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h2>Search result of {query}</h2>
      </Paper>

      <Row md={4}>
        {searchs
          ? searchs?.results?.map((movie) => {
              return (
                <>
                  <div key={movie.id}>
                    <Paper style={{ border: "1px solid gray", margin: "10px" }}>
                      <Paper
                        style={{
                          margin: 15,
                          width: 350,
                          height: 180,
                          borderRadius: 5,
                          cursor: "pointer",
                          justifyContent: "center",
                          textAlign: "center",
                          backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMG_ORI}${movie.backdrop_path})`,
                        }}
                      >
                        <Row style={{ color: "white" }}>
                          <Col>
                            <Tooltip title={movie.title || movie.original_name}>
                              <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                                <img
                                  src={`${process.env.REACT_APP_MOVIE_IMG_ORI}${movie.poster_path}`}
                                  alt="name"
                                  style={{ marginTop: 10, width: 100, height: 150, borderRadius: 5, cursor: "pointer", justifyContent: "center", textAlign: "center" }}
                                />
                              </Link>
                            </Tooltip>
                          </Col>
                        </Row>
                      </Paper>
                      <h5 style={{ marginBottom: "5px" }}> {movie.title || movie.original_name}</h5>
                    </Paper>
                  </div>
                </>
              );
            })
          : ""}
      </Row>
    </div>
  );
};

export default RendersMovie;
