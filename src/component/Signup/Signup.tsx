import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
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
import axios from "axios";
import "../Signup/SignupStyle.css";
import CheckBoxFlied from "../CustomTextField/CheckBoxFlied";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


type Props = {};

const Signup = (props: Props) => {
  const [error, setError] = useState(false)
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [userId, setUserId] = useState("");
  const navigate = useNavigate();

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
      //  userId
    })
   
    .then((res) => {
      console.log(res, "Result");
      console.log(res.data.userId, "UserId");
     const userID =(res.data.userId)
     setUserId(userID)
     console.log('====================================');
     console.log(userId);
     console.log('====================================');
  //  localStorage.setItem("userId" ,JSON.stringify(res.data.userId));

  //userId Set here//
   localStorage.setItem("userId",(res.data.userId));

      navigate("/login");
      
    })
    .catch((err) => {
      console.log(err, "error");
    });

    if (email.length == 0 || password.length == 0 ||name.length == 0) {
      setError(true)

    }
  }



  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth) {
      //  navigate("/login");
    }

  
   
  }, []);
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
      <Container maxWidth="sm" id='SignupContainer'>
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
              {/* <input
              type="hidden"
              value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              /> */}
              <TextField
                
                id="outlined-required"
                label="Name"
                type="text"
                placeholder="Type Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {error && name.length <= 0 ?
                  <Alert severity="error">Name can't be Empty — check it out!</Alert> : ""}

         
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
      </Container>

      <Footer />
    </>
  );
};

export default Signup;

