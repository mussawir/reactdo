import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import Alert from '@mui/material/Alert';
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
  Container,
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
  const [error, setError] = useState(false)
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password, isCheckedA);
   
    if (email.length == 0 || password.length == 0) {
      setError(true)
      console.log(email,password)
      return;
    }
    
    await axios
      // .post("https://sea-lion-app-en7u9.ondigitalocean.app/auth/login", {
        .post("http://localhost:5000/auth/login", {
      email,
        password,
      })

      .then((res: any) => {
        // console.log("ResultResultResultResultResultResult", res);
        // console.log("token", res.data.token);
        const userEmail = (email);
        getUserId(userEmail);
        //  console.log("Output", res.data);
        //  const userId = localStorage.setItem('userId');
        localStorage.setItem("token" ,JSON.stringify(res.data.token));
       let getToken = res.data.token;
         setToken(getToken);
        //  console.log(token,"Token");
      
        if(email == "admin@gmail.com"){
           navigate("/admindashboard/adashboard");
        } 
        else{
          navigate('/dashboard/iv/'+ userEmail);
        }
   // DashboardList(userEmail);
      })
      .catch((err: any) => {
        console.log(err, "error");
      });
      // const DashboardList = (userEmail: string) => {
      //   // 👇️ navigate to / location
      //   navigate('/dashboard/iv/'+ userEmail);
      // };
 
    // if(localStorage.getItem("token")){
    //   navigate("/dashboard");
    // }else{
    //   navigate("/login");
    // }
  };

  const getUserId = async (email: string) => {
    console.log("para", email);
    await axios
      // .post("https://sea-lion-app-en7u9.ondigitalocean.app/auth/login", {
        .get("http://localhost:5000/user/getid/" + email)
      .then((res: any) => {
      console.log("UserId", res.data.userId);
      localStorage.setItem("userId" ,JSON.stringify(res.data.userId));     
      })
      .catch((err: any) => {
        console.log(err, "error");
      });
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
      <Container maxWidth="sm" id='LoginContainer'>
        <Grid xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" justifyContent="flex-start">
              <Typography className="Login">Login</Typography>
              <p></p>

              <TextField
                
                id="outlined-number"
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
               {error && email.length <= 0 ?
                <Alert severity="error">Email can't be Empty — check it out!</Alert> : ""}
              <p></p>
              <TextField
                
                id="outlined-password-input"
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
{error && password.length <= 0 ?
                  <Alert severity="error">Password can't be Empty — check it out!</Alert> : ""}
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
      </Container>

      <Footer />
    </>
  );
};

export default Login;
