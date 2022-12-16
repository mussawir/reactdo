import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
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


import "../Login/LoginStyle.css";
import CheckBoxFlied from "./../CustomTextField/CheckBoxFlied";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";

type Values = {
  email: string;
  password: any;
};

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [token, setToken] =useState("");
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password, isCheckedA);

    await axios
      .post("https://sea-lion-app-en7u9.ondigitalocean.app/auth/login", {
        email,
        password,
      })

      .then((res: any) => {
        console.log("ResultResultResultResultResultResult", res);
        console.log("token", res.data.token);
        localStorage.setItem("token" ,JSON.stringify(res.data.token));
         let getToken = res.data.token;
         setToken(getToken);
         console.log(token,"Token");
      
        if(email == "admin@gmail.com"){
          navigate("/admindashboard/adashboard");
        }else{
          navigate("/dashboard");
        }
      })
      .catch((err: any) => {
        console.log(err, "error");
      });

      

    // if(localStorage.getItem("token")){
    //   navigate("/dashboard");
    // }else{
    //   navigate("/login");
    // }

  

  };
    // New Token Cheking Authentication Code
  useEffect(() => {
    if(!token) {
      navigate("/login");
    }
   
  }, [])

  return (
    <>
      <Header />
      <Box id="LoginFormContainer">
        <Grid>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" justifyContent="flex-start">
              <Typography className="Login">Login</Typography>
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

              <div>
                <small>
                  <span>Forgot your password?</span>
                </small>
              </div>

              <Button id="signin-btn" variant="contained" type="submit">
                Login
              </Button>
              <Grid justifyContent="flex-start">
                <CheckBoxFlied
                  label=" Remember me"
                  handleChange={handleChangeA}
                  isChecked={isCheckedA}
                />
              </Grid>

              <Divider>
                <small style={{ color: "#767676" }}>or</small>
              </Divider>
            </Grid>

            <Button id="signin-btn" variant="contained" >
              <AppleIcon />
               Sign in with Apple
            </Button>

            <Button id="signin-btn" variant="contained" >
               <FacebookIcon /> Continue with Facebook
            </Button>
          </form>

          <div>
            <small>
              <Typography className="textDescribtion">
                Get notified when your friends back and launch projects. We'll
                never post anything on Facebook without your permission.
                <a href="#" style={{ textDecoration: "none" }}>
                  Read more
                </a>{" "}
              </Typography>
            </small>
          </div>

          <Divider />

          <Link id="register-link" to="/signup">
            <Typography id="register-text">
              New to Investing Verse?{" "}
              <a href="" id="sign-up">
                Sign up
              </a>
            </Typography>
          </Link>

          <Divider />

          <div>
            <small>
              <Typography className="textEnd">
                This site is protected by reCAPTCHA and the Google
                <a href="#">Privacy Policy</a> and
                <a href="#">Terms of Service </a>apply.
              </Typography>
            </small>
          </div>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Login;
