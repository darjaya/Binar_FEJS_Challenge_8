import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.less";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import TrendingMovie from "./Components/Movie/Trendings";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Components/Home/Home";
import NavbarMenu from "./Components/Home/Navbar";
import Protected from "./Components/Core/Protected";
import store from "./Redux/store";
import { Provider } from "react-redux";
import PopularMovie from "./Components/Movie/Populars";
import DetailMovie from "./Components/SubMovie/DetailMovie";
import Genres from "./Components/SubMovie/Genres";
import SearchMovie from "./Components/SubMovie/SearchMovie";
import RendersMovie from "./Components/SubMovie/GetMovie";

function App() {
  const tokenLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLocalStorage);

  return (
    <div className="web-movie-app">
      <Provider store={store}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <BrowserRouter>
            <NavbarMenu token={token} setToken={setToken} />
            <Genres />
            <Routes>
              <Route index element={<Home token={token} setToken={setToken} />} />
              <Route path="/register" element={<Register token={token} setToken={setToken} />} />
              <Route path="/login" element={<Login token={token} setToken={setToken} />} />
              <Route
                path="/movie/popular"
                element={
                  <Protected token={token} setToken={setToken}>
                    <PopularMovie />
                  </Protected>
                }
              />
              <Route
                path="/movie/trending"
                element={
                  <Protected token={token} setToken={setToken}>
                    <TrendingMovie />
                  </Protected>
                }
              />
              <Route
                path="/details/:id"
                element={
                  <Protected token={token} setToken={setToken}>
                    <DetailMovie />
                  </Protected>
                }
              />
              <Route path="/movie/search/" element={<SearchMovie />} />
              <Route path="/search/:query" element={<RendersMovie />} />
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </Provider>
    </div>
  );
}

export default App;
