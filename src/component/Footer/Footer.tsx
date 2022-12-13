import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import ftrlogo from  '../images/ftrlogo.png';
import Typography from '@mui/material/Typography';
import "../Footer/Footer.css"
import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




type Props = {}

function Footer (props: Props) {
    return (
 <>
<Grid className='footer'>
  <Container maxWidth="lg">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
        <Grid item xs={3}>
          <div className='footer-sec-01'>
            <img src={ftrlogo} alt="ftr-logo" />
            <Typography id="ftr-para">
            We’re an in-house team of trailblazers who aren’t afraid to take risks. We’re digital architects who build highly specialized web platforms
            </Typography>
          </div>         
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <div className='footer-sec-02'>
            <h2>Qucik Links</h2>
            <ul>
                <li><a href="#"><KeyboardArrowRightSharpIcon /> Home</a></li>
                <li><a href="#"><KeyboardArrowRightSharpIcon /> Services</a></li>
                <li><a href="#"><KeyboardArrowRightSharpIcon /> About Us</a></li>
                <li><a href="#"><KeyboardArrowRightSharpIcon /> Contact</a></li>
            </ul>
          </div>         
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <div className='footer-sec-03'>
            <h2>Location</h2>
            <ul>
                <li><a href="#"><LocationOnIcon /> 533 Janet Avenue, Suite 202 Lancaster, PA 17601</a></li>
                <li><a href="#"><CallIcon /> 877-696-7482 , 877-696-7482</a></li>
                <li><a href="#"><EmailIcon /> info@invertingverse.com</a></li>
            </ul>
          </div>         
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <div className='footer-sec-04'>
            <h2>Newsletter</h2>
            <Paper
      component="form"
      sx={{ p: '6px 6px', display: 'flex', alignItems: 'center', width:270, paddingTop:'8px', paddingLeft:'20px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Email Address.."
        inputProps={{ 'aria-label': 'Email Address..' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
       <SendIcon id="send1"/>
 
    </Paper>
    <div className="ftr-social-links">
        <ul>
            <li><a href="#"><FacebookTwoToneIcon id="fb"/></a></li>
            <li><a href="#"><TwitterIcon id="twit"/></a></li>
            <li><a href="#"><LinkedInIcon id="in"	/></a></li>
        </ul>
    </div>
          </div>         
        </Grid>
      </Grid>
  </Container>
</Grid>

<Grid className='socket'>
  <Container maxWidth="lg">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6, lg: 6 }}>
        <Grid item xs={6}>
        <div className='socket-sec'>
            <p>© 2022 Invertingverse. All rights reserved.</p>
          </div>  
        </Grid>
        <Grid item xs={6}>
        <div className='socket-sec'>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Legal</a></li>
            </ul>
          </div>  
        </Grid>
      </Grid>
      </Container>
</Grid>      





</>                                     
    )
}

export default Footer
