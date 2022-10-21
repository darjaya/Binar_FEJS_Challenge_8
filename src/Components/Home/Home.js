import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SliderHome from "../Home/SliderHome";
import Genres from "../Movie/Genres";
import ListMovie from "../Movie/ListMovie";
import SliderMovie from "../Movie/SliderMovie";

function Home({ token, setToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          await axios.get(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            setToken(null);
            navigate.push("/");
          }
        }
      }
    })();
  }, [token, navigate, setToken]);

  return (
    <div>
      {!token ? (
        <>
          <SliderHome />
          <SliderMovie />
        </>
      ) : (
        <>
          <Genres />
          <ListMovie />
          <SliderMovie />
        </>
      )}

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
}

export default Home;
