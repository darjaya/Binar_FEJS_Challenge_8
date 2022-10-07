import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Account">
        <Button style={{ color: "#dc143c", fontFamily: "roboto" }} id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
          <strong>
            <AccountCircleRoundedIcon fontSize="large" style={{ color: "#DC143C", fontWeight: "bold" }} />
          </strong>
        </Button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircleRoundedIcon style={{ color: "#DC143C", fontSize: "large" }} />
          {"Profile"}
        </MenuItem>
      </Menu>
      <Tooltip title="Settings">
        <Button style={{ color: "#dc143c", fontFamily: "roboto" }}>
          <strong>
            <SettingsIcon fontSize="large" style={{ color: "#DC143C", fontWeight: "bold" }} />
          </strong>
        </Button>
      </Tooltip>
      <Tooltip title="Log Out">
        <Button style={{ color: "#dc143c", fontFamily: "roboto" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoutIcon fontSize="large" style={{ color: "#DC143C", fontWeight: "bold" }} />
          </Link>
        </Button>
      </Tooltip>
    </div>
  );
}
