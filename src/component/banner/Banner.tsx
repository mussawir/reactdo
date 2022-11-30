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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
        <Grid item xs={4}>
          <div className='banner-box'>
            <h2>$229,035</h2>
            <p>projects funded</p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='banner-box'>
            <h2>$229,035</h2>
            <p>projects funded</p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='banner-box'>
            <h2>$229,035</h2>
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

