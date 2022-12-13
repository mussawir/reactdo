import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import  '../banner/Banner.css';

type Props = {}

function Banner(props: Props) {
    return (
        <>
        <Grid className='main-banner'>
  <Container maxWidth="lg">
    <h1>Bring a Creative Project to life.</h1>
    <h5>Fundraising on investingverse takes just a few minutes</h5>
  </Container>
</Grid>
<Grid className='main-sec-2'>
  <Container maxWidth="lg">
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 8, sm: 12, md: 14, lg: 1 }}>
        <Grid item xs={4} lg={4} >
          <div className='banner-box'>
            <Typography id="typobannerbox">$229,035</Typography>
            <Typography>projects funded</Typography>
          </div>
        </Grid>
        <Grid item xs={4} lg={4}>
          <div className='banner-box'>
            <Typography  id="typobannerbox">$229,035</Typography>
            <p >projects funded</p>
          </div>
        </Grid>
        <Grid item xs={4} lg={4}>
          <div className='banner-box'>
            <Typography  id="typobannerbox">$229,035</Typography>
            <p>projects funded</p>
          </div>
        </Grid>
      </Grid>
    </div>
  </Container>
</Grid>
</>                 
    )
}

export default Banner