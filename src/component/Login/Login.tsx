import React, {  useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
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

import EmailField from "./../CustomTextField/EmailField";
import PasswordField from "./../CustomTextField/PasswordField";
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
  const [isCheckedA, setIsCheckedA] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values, isCheckedA);
    await axios
      .post("http://localhost:5000/auth/login", { values })
      
      .then((res: any) => {
        console.log("ResultResultResultResultResultResult", res);
        console.log("token",res.data.token);
        var token = res.data.token;
      })
      .catch((err: any) => {
        console.log(err, "error");
      });

      // if(){
      //   navigate("/login");
      // }else{
      //   navigate("/dashboard");
      // }

     
  };

  




  // useEffect(() => {
  //   const auth = localStorage.getItem("logintoken");
  //   if (auth) {
  //     navigate("/dashboard");
  //   }if(!auth){
  //     navigate('/login')
  //   }
  // }, []);

  return (
    <>
    <Header/>
      <Box id="LoginFormContainer">
        <Grid>
          <form onSubmit={ handleSubmit}>
            <Grid container direction="column" justifyContent="flex-start">
              <Typography className="Login">Login</Typography>

              <EmailField
                changeHandler={handleChange}
                label={"Email"}
                name={"email"}
              />

              <PasswordField
                changeHandler={handleChange}
                label={"Password"}
                name={"password"}
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

            <Button id="signin-btn" variant="contained" type="submit">
              <AppleIcon />
               Sign in with Apple
            </Button>

            <Button id="signin-btn" variant="contained" type="submit">
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

      <Footer/>
    </>
  );
};

export default Login;
