import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
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

type Values = {
  name: string;
  email: string;
  password: any;
};

const Signup = () => {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    password: "",
  });

  const [isCheckedA, setIsCheckedA] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  const navigate = useNavigate();
  const [isCheckedB, setIsCheckedB] = useState(false);
  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values, isCheckedA, isCheckedB);
    await axios
      .post("https://sea-lion-app-en7u9.ondigitalocean.app/auth/register", { values })
      .then((res: any) => {
        console.log(res, "Result");
      })
      .catch((err: any) => {
        console.log(err, "error");
      });
      localStorage.setItem('user', JSON.stringify(values));
      alert("Your Are Register Now!");
      navigate("/login");
  };


  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/login");
  //   }
  // }, []);
  const check1 =
    "Send me a weekly mix of handpicked projects,plus occasional Kickstarter news";
  const check2 = "Contact me about participating in Kickstarter research";

  return (
    <>
    <Header/>
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container direction="column" justifyContent="flex-start">
              <Typography className="Login">Signup</Typography>

              <NameField
                changeHandler={handleChange}
                label={"Name"}
                name={"name"}
              />

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
 <p id="checkBox"></p>
              <Grid justifyContent="flex-start" >
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

            <Button id="Create-btn" variant="contained" type="submit">
              <AppleIcon />
               Sign in with Apple
            </Button>
          </form>
        </Grid>
      </Box>

    <Footer/>
    </>
  );
};

export default Signup;
