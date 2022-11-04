import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper, TextField, Tooltip } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchMovie() {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const searchMovies = () => {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${query}&page=1&include_adult=false`)
        .then((response) => {
          setSearch(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (query === "") {
      setSearch([]);
      return;
    }
    searchMovies();
  }, [query]);

  return (
    <div>
      <hr />
      <div style={{ color: "red", fontWeight: "bold", mb: 40 }}>
        <TextField
          label="Search Movie"
          size="large"
          id="standard-basic"
          variant="standard"
          className="inputSearch"
          style={{ color: "red", fontWeight: "bold", mb: 50 }}
          placeholder="What do you want to watch? write here...."
          type="text"
          onChange={(e) => {
            if (e.target.value === "") setSearch([]);
            setQuery(e.target.value);
          }}
        />
      </div>

      <div>
        <Row md={3} style={{ mt: 30 }}>
          {search.length > 1 &&
            search?.map((movie) => {
              return (
                <div key={movie.id}>
                  <Paper style={{ margin: 20, width: 500, height: 180, borderRadius: 5, cursor: "pointer", justifyContent: "center", textAlign: "center" }}>
                    <Row style={{ color: "Black" }}>
                      <Col md={2}>
                        <Tooltip title={movie.title || movie.original_name}>
                          <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
                            <img src={`${process.env.REACT_APP_MOVIE_IMG_ORI}${movie.poster_path}`} alt="name" style={{ width: 130, height: 180, borderRadius: 5, cursor: "pointer", justifyContent: "center", textAlign: "center" }} />
                          </Link>
                        </Tooltip>
                      </Col>
                      <Col>
                        <h5 style={{ marginTop: "40px" }}> {movie.title || movie.original_name}</h5>
                      </Col>
                    </Row>
                  </Paper>
                </div>
              );
            })}
        </Row>
      </div>

      <div></div>
    </div>
  );
}
export default SearchMovie;
