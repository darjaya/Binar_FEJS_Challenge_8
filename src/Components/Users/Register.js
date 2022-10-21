import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import GoogleLogin from "../Core/GoogleLogin";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Register = ({ token, setToken }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        name: firstName + lastName,
        email,
        password,
      };
      try {
        const result = await axios.post(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/register`, data);
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {!token ? (
        <>
          <div className="register-form">
            <Card elevation={3} sx={{ minWidth: 275 }}>
              <CardContent>
                <h2> Create Your Account</h2>
                <GoogleLogin setToken={setToken} label="Join with Google" />
                <h5 style={{ marginTop: 25 }}> Or</h5>
                <Form onSubmit={handleSubmit}>
                  <Box sx={{ "& > :not(style)": { mt: 2, width: "70ch", border: "white", borderRadius: "20px" } }}>
                    <TextField
                      id="standard-password-input"
                      label="First Name"
                      type="text"
                      variant="outlined"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <AccountCircle style={{ marginRight: 8 }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      id="standard-password-input"
                      label="Last Name"
                      type="text"
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <AccountCircle style={{ marginRight: 8 }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      sx={{ border: "2px solid red", borderRadius: "20px" }}
                      id="input-with-icon-textfield"
                      label="Email Address"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon style={{ marginRight: 8 }} />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      id="input-with-icon-textfield"
                      type={values.showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                              {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Button
                    sx={{
                      mt: 5,
                      width: "40ch",
                      borderRadius: "20px",
                    }}
                    variant="contained"
                    size="small"
                    disabled={!email || !password}
                    onClick={handleSubmit}
                  >
                    Register Now
                  </Button>
                </Form>
                <p style={{ marginTop: 20, color: "GrayText" }}>
                  Have an account already?
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Log In
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <>
          <Navigate to={`/`} />
        </>
      )}
    </div>
  );
};

export default Register;
