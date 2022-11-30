import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import axios from "axios";

import NameField from "../../CustomTextField/NameField";
import DescriptionFlield from "../../CustomTextField/DescriptionFlield";
import PriceField from "../../CustomTextField/PriceFlied";
import "./PostProjectStyle.css";

type Values = {
  name: string;
  price: string;
  description: any;
};

const Signup = () => {
  const [values, setValues] = useState<Values>({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    await axios
      .post("http://localhost:3000/project", { ...values })
      .then((res: any) => {
        console.log(res, "Result");
      })
      .catch((err: any) => {
        console.log(err, "error");
      });
  };

  return (
    <>
      <Box id="mainFormContainer">
        <Grid>
          <Grid id="TopSection">
            <span>
              <Typography>Create Project</Typography>{" "}
            </span>
            <span></span>
          </Grid>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container direction="column" justifyContent="flex-start">
              <Typography className="Login">Create</Typography>

              <NameField
                changeHandler={handleChange}
                label={"Name"}
                name={"name"}
              />

              <PriceField
                changeHandler={handleChange}
                label={"Price"}
                name={"price"}
              />
              <DescriptionFlield
                changeHandler={handleChange}
                label={"Description"}
                name={"description"}
              />

              <input style={{ marginTop: 10 }} type="file" />

              <Button id="Create-btn" variant="contained" type="submit">
                Create Your Project
              </Button>
              <div>
                <small>
                  <Typography className="textEnd">
                    This site is protected by reCAPTCHA and the Google
                    <a href="#">Privacy Policy</a> and
                    <a href="#">Terms of Service </a>apply.
                  </Typography>
                </small>
              </div>

              <Divider>
                <small style={{ color: "#767676" }}>or</small>
              </Divider>
            </Grid>

            <Button id="Create-btn" variant="contained" type="submit">
              <AppleIcon />
               Sign in with Apple
            </Button>
          </form>
        </Grid>
      </Box>
    </>
  );
};

export default Signup;
