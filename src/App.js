import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.less";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import PopularMovie from "./Components/Categories/Populars";
import Details from "./Components/Categories/Details";
import TrendingMovie from "./Components/Categories/Trendings";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Components/Home/Home";
import NavbarMenu from "./Components/Home/Navbar";
import Protected from "./Components/Core/Protected";

function App() {
  const tokenLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLocalStorage);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <div className="web-movie-app">
          <NavbarMenu token={token} setToken={setToken} />
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
                  <Details />
                </Protected>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
