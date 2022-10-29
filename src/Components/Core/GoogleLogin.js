import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function GoogleLogin({ setToken, label }) {
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = {
          access_token: response.access_token,
        };
        const result = await axios.post(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`, data);
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div>
      <Button
        sx={{
          mt: 5,
          width: "80ch",
          borderRadius: "5px",
          // display: "flex",
        }}
        variant="contained"
        size="large"
        onClick={googleLogin}
      >
        <GoogleIcon style={{ m: 15, marginRight: "5px" }} /> {label}
      </Button>
    </div>
  );
}

export default GoogleLogin;
