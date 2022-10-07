import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="register-form">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h2> Log In</h2>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mt: 2, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-password-input" label="Email" type="email" variant="standard" />
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mt: 2, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-password-input" label="Password" type="password" variant="standard" />
          </Box>
          <Link to="/i" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                mt: 5,
                width: "40ch",
                borderRadius: "20px",
              }}
              variant="contained"
              size="small"
            >
              SUBMIT
            </Button>
          </Link>
          <p style={{ marginTop: 20, color: "GrayText" }}>
            Don't have an account?
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
