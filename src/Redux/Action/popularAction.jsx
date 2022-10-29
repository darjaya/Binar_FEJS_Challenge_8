import { GET_ALL_POPULARS } from "../types";
import axios from "axios";

export const getAllPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8aced447ac0b69fe5ae000b735a3adef");

    dispatch({
      type: GET_ALL_POPULARS,
      payload: data,
    });
  } catch (error) {
    throw error;
  }
};
