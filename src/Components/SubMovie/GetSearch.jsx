import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageviewRoundedIcon from "@mui/icons-material/PageviewRounded";

function GetSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <TextField
        id="filled-basic"
        variant="filled"
        style={{ fontWeight: "bold" }}
        label="Search Movie"
        size="medium"
        className="inputSearch"
        placeholder="What do you want to watch? write here...."
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <PageviewRoundedIcon fontSize="large" onClick={() => navigate(`/search/${query}`)} style={{ cursor: "pointer", color: "#dc143c" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
export default GetSearch;
