import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";
import { Button } from "@mui/material";
import MenuMovie from "./MenuMovie";
import GetSearch from "../SubMovie/GetSearch";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function NavbarMenu({ token, setToken }) {
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

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <header className="menupage">
      <Grid container spacing={2} className="gridbar">
        <Grid item xs={3}>
          <StyledLink to="/">
            <h1 className="logopage">Movielist</h1>
          </StyledLink>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "right", marginTop: "15px" }}>
          <GetSearch />
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "right", marginTop: "20px" }}>
          <StyledLink to="movie/search">
            <Button variant="contained" sx={{ borderRadius: 1, border: "2px solid #dc143c", marginRight: "5px" }}>
              search
            </Button>
          </StyledLink>
        </Grid>

        {!token ? (
          <>
            <Grid sx={{ marginTop: "15px" }}>
              <StyledLink to="login">
                <Button variant="contained" sx={{ borderRadius: 1, border: "2px solid #dc143c", marginTop: "20px", marginRight: "10px" }}>
                  Log In
                </Button>
              </StyledLink>
              <StyledLink to="register">
                <Button variant="contained" sx={{ borderRadius: 1, border: "2px solid #dc143c", marginTop: "20px" }}>
                  Register
                </Button>
              </StyledLink>
            </Grid>
          </>
        ) : (
          <>
            <Grid item sx={{ marginTop: "20px" }}>
              <MenuMovie />
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <Button variant="contained" sx={{ borderRadius: 1, border: "2px solid #dc143c" }}>
                TV Show
              </Button>
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <Button variant="contained" onClick={handleLogout} sx={{ borderRadius: 1, border: "2px solid #dc143c" }}>
                Log Out
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </header>
  );
}

export default NavbarMenu;
