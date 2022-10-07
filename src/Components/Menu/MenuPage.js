import React from "react";
import Grid from "@mui/material/Grid";
import SearchMovie from "../Core/SearchMovie";
import AccountMenu from "../Core/Account";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function MenuPage(props) {
  return (
    <div className="menupage">
      <Grid container spacing={2} className="gridbar">
        <Grid item xs={3}>
          <StyledLink to="/">
            <h1 className="logopage">Movielist</h1>
          </StyledLink>
        </Grid>
        <Grid item xs={7}>
          <SearchMovie />
        </Grid>
        <Grid item xs={2}>
          <AccountMenu />
        </Grid>
      </Grid>
    </div>
  );
}

export default MenuPage;
