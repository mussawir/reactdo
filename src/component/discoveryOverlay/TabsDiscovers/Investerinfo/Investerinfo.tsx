import { Button, Divider, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../../Footer/Footer'
import TopAppBar from '../../../New Dashboard/TopBarDashboard/TopAppBar'

type Props = {}

const Investerinfo = (props: Props) => {
  return (
    <>
    <TopAppBar/>
    
    
    {/* <Container maxWidth="sm" id='LoginContainer'>
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
      </Container> */}
    
    
    
    
    
    
    <Footer/>
    </>
  )
}

export default Investerinfo