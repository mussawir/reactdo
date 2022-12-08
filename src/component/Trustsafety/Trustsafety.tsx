import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import  '../Trustsafety/Trustsafety.css';
import icon from  '../images/icon.png';

type Props = {}

function Trustsafety(props: Props) {
    return (
<>
<Grid className='trust-safety'>
  <Container maxWidth="lg">
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <div className='trust-safety-sec'>
            <h3><img src={icon} />Trust & Safety</h3>
            <h2>We have your back.</h2>
            <p>With one-quarter of our global team dedicated to trust and safety, we’ve successfully managed fundraisers worldwide for more than a decade. Don’t worry about a thing, we’ve got you covered.</p>
            <a href="#">Explore Trust & Safety</a>
          </div>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  </Container>
</Grid>
</>                 

    )
}

export default Trustsafety