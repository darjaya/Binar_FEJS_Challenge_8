import React from "react";
import MenuPage from "../Menu/MenuPage";
import SliderMovie from "../Movie/SliderMovie";
import ListMovie from "../Movie/ListMovie";
import Genres from "../Core/Genres";

const HomePage = () => (
  <div className="web-movie-app">
    <div>
      <MenuPage />
      <Genres />
      <ListMovie />
    </div>
    <div>
      <SliderMovie />
    </div>
    <footer
      style={{
        textAlign: "center",
        backgroundColor: "#dc143c",
        color: "whitesmoke",
        marginTop: 100,
        fontSize: 20,
        fontWeight: "bold",
        height: 100,
      }}
    >
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#dc143c",
          color: "whitesmoke",
          marginTop: 30,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Binar Web Movie ©2022 by Indar Jaya
      </p>
    </footer>
  </div>
);

export default HomePage;
