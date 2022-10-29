import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";
import { Button, Modal, Backdrop, Fade, Box } from "@mui/material";

import SearchMovie from "../Core/SearchMovie";

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

  const style = {
    position: "absolute",
    top: "6%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "90px",
    background: "rgba(0, 0, 0, 0)",
    borderRadius: 1,
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <header className="menupage">
      <Grid container spacing={2} className="gridbar">
        <Grid item xs={6}>
          <StyledLink to="/">
            <h1 className="logopage">Movielist</h1>
          </StyledLink>
        </Grid>
        <Grid>
          <StyledLink to="/moviepop">
            <h1 className="logopage">Populars</h1>
          </StyledLink>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "right", marginTop: "20px" }}>
          <Button variant="contained" onClick={handleOpenModal} sx={{ borderRadius: 1, border: "2px solid #dc143c", marginRight: "10px" }}>
            Search
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            open={openModal}
            id="slide1"
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openModal}>
              <Box sx={style} id="slide1">
                <SearchMovie />
              </Box>
            </Fade>
          </Modal>
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
