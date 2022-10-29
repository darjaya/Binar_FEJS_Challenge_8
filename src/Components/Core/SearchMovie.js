import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Tooltip } from "@mui/material";
import RendersMovie from "../Movie/RendersMovie";
import { Row } from "react-bootstrap";

function SearchMovie() {
  const [search, setSearch] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const searchMovies = () => {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=8aced447ac0b69fe5ae000b735a3adef&language=en-US&query=${searchKey}&page=1&include_adult=false`)
        .then((response) => {
          setSearch(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (searchKey === "") {
      setSearch([]);
      return;
    }
    searchMovies();
  }, [searchKey]);

  return (
    <div>
      <div>
        <form style={{ justifyContent: "center", textAlign: "center" }} className="formSearchPage">
          <input
            className="inputSearch"
            style={{ color: "red", fontWeight: "bold" }}
            placeholder="What do you want to watch"
            type="text"
            onChange={(e) => {
              if (e.target.value === "") setSearch([]);
              setSearchKey(e.target.value);
            }}
          />
          <Tooltip title="Search">
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon color="primary" onClick={search} />
            </IconButton>
          </Tooltip>
        </form>
      </div>
      <div>
        <Row md={2}>
          {search.length > 1 &&
            search.map((movie, index) => {
              return <RendersMovie key={movie.id} movie={movie} />;
            })}
        </Row>
      </div>
    </div>
  );
}
export default SearchMovie;
