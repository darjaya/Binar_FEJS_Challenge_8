import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Paper } from "@mui/material";
// import { Link } from "react-router-dom";
import { getAllPopular } from "../Redux/Action/popularAction";
// import Genres from "../Components/Movie/Genres";
import { Row } from "react-bootstrap";
import { Paper, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function PopularMovie() {
  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };
  const dispatch = useDispatch();

  const { populars } = useSelector((state) => state.popular);
  console.log(populars.map((movie) => movie.title));

  useEffect(() => {
    dispatch(getAllPopular());
  }, [dispatch]);

  return (
    // <div>
    //   <Paper style={{ border: "1px solid gray" }}>
    //     <Row md={6}>
    //       {populars.map((movie) => {
    //         return (
    //           <div key={movie.id}>
    //             <Paper style={{ margin: 15, width: 150, height: 200, borderRadius: 5, cursor: "pointer", justifyContent: "center", textAlign: "center" }}>
    //               <Tooltip title={movie.original_title || movie.original_name}>
    //                 <Link to={`/details/${movie.id}${movie.title || movie.original_name}`}>
    //                   <img src={getPoster(movie.poster_path)} alt="name" style={{ marginTop: 10, width: 130, height: 180, borderRadius: 5, cursor: "pointer", justifyContent: "center", textAlign: "center" }} />
    //                 </Link>
    //               </Tooltip>
    //             </Paper>
    //           </div>
    //         );
    //       })}
    //     </Row>
    //   </Paper>
    // </div>
    <div>
      {populars.map((movie) => {
        return <h2>{movie.title} </h2>;
      })}
    </div>
  );
}

export default PopularMovie;
