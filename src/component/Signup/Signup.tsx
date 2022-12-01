import React, { useState } from "react";
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

import EmailField from "./../CustomTextField/EmailField";
import NameField from "./../CustomTextField/NameField";
import PasswordField from "./../CustomTextField/PasswordField";
import axios from "axios";
import "../Signup/SignupStyle.css";
import CheckBoxFlied from "../CustomTextField/CheckBoxFlied";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {};

const Signup = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Navigate = useNavigate();

  const [isCheckedA, setIsCheckedA] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };
  const [isCheckedB, setIsCheckedB] = useState(false);
  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
 console.log(name, email,password, isCheckedA, isCheckedB);

  axios
    .post("https://sea-lion-app-en7u9.ondigitalocean.app/auth/register", {
      name,
      email,
      password,
    })
   
    .then((res) => {
      console.log(res, "Result");
    })
    .catch((err) => {
      console.log(err, "error");
    });

  };
    // console.log(name, email,password, isCheckedA, isCheckedB);
  // const OnformSubmit = () => {
  //   // alert("You'r Successfully Register");
  //   if(name === ""){
  //     alert("Name Filed Require");
  //     Navigate('/login')
  //   }if(email === ""){
  //     alert("email Filed Require");
  //     Navigate('/login')
  //   }if(password === ""){
  //     alert("password Filed Require");
  //     Navigate('/login')
  //   }else{
  //     alert("You'r Successfully Register");
  //     Navigate('/')
  //   }

  // };
  const check1 =
    "Send me a weekly mix of handpicked projects,plus occasional Kickstarter news";
  const check2 = "Contact me about participating in Kickstarter research";

  return (
    <>
      <Header />
      <Box id="mainFormContainer">
        <Grid>
          <Grid id="TopSection">
            <span>
              <Typography>Have an account?</Typography>{" "}
            </span>
            <span>
              <Link id="log" to="/login">
                Log in
              </Link>
            </span>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" justifyContent="flex-start">
              <Typography className="Login">Signup</Typography>

              <TextField
                required
                id="outlined-required"
                label="Name"
                type="text"
                placeholder="Type Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <p></p>

              <TextField
                required
                id="outlined-number"
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
 <p></p>
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <p id="checkBox"></p>
              <Grid justifyContent="flex-start">
                <CheckBoxFlied
                  label={check1}
                  handleChange={handleChangeA}
                  isChecked={isCheckedA}
                />
                <br />
                <p id="checkBox"></p>

                <CheckBoxFlied
                  label={check2}
                  handleChange={handleChangeB}
                  isChecked={isCheckedB}
                />
              </Grid>

              <Button id="Create-btn" variant="contained" type="submit">
                Create account
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

            <Button id="Create-btn" variant="contained" >
              <AppleIcon />
               Sign in with Apple
            </Button>
          </form>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Signup;
