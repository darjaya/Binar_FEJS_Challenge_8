import { GET_ALL_POPULARS } from "../types";

const initialState = {
  populars: [],
  token: localStorage.getItem("token"),
};

const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POPULARS:
      return {
        ...state,
        populars: [action.payload],
      };
    default:
      return state;
  }
};

export default popularReducer;
