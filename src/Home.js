import "./Home.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import ReactDOM from "react-dom";

const Home = () => {
  const [isNickConf, setIsNickConf] = useState(false);
  const [nickname, setNickname] = useState("");
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/PhotoApp", { state: nickname });
  };

  const confirmInput = () => {
    const nick = document.getElementById("fname").value;

    if (nick !== "" && nick !== undefined) {
      document.getElementById("HomeForm").innerHTML =
        "<div style='font-size: 2em; color:gold; font-weight:bold;'>" +
        nick +
        "</div>";
      setIsNickConf(true);
      setNickname(nick);
    } else {
      ReactDOM.render(
        <Stack direction="row" justifyContent="center" className="Home-label">
          <TextField
            error
            id="fname"
            label="*Nickname Required"
            defaultValue=""
            variant="filled"
            autoComplete="off"
          />
        </Stack>,
        document.getElementById("HomeForm")
      );
    }
  };

  return (
    <div className="Home">
      <div className="Home-title">Login</div>

      <div className="Home-form" id="HomeForm">
        <Stack direction="row" justifyContent="center" className="Home-label">
          <TextField
            id="fname"
            label="insert Nickname"
            variant="filled"
            autoComplete="off"
          />
        </Stack>
      </div>

      {isNickConf ? (
        <div className="Home-Button">
          <Button
            size="large"
            variant="contained"
            startIcon={<DoneIcon />}
            onClick={redirect}
            c
          >
            Go to Photoboot
          </Button>
        </div>
      ) : (
        <div className="Home-Button">
          <Button
            size="large"
            variant="contained"
            endIcon={<DoneIcon />}
            onClick={confirmInput}
          >
            Confirm Nickname
          </Button>
        </div>
      )}
    </div>
  );
};
export default Home;
