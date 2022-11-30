import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import updates from '../images/updates_05.png';
import '../Invertingverseprojectupdates/Invertingverseprojectupdates.css'

type Props = {}

function Invertingverseprojectupdates(props: Props) {
    return (
<>
<Grid className='inverting-verse-project-updates'>
  <Container maxWidth="lg">
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
        <Grid item xs={5}>
          <div className='inverting-verse-project-updates-left-col'>
            <img src={updates} alt="" />
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className='inverting-verse-project-updates-right-col'>
            <h2>Invertingverse Project Updates</h2>
            <p>A destination for news, tips, and inspiration, and home to our new monthly video series, Kickstarter Project Updates shares everything you need to know about what’s happening at Invertingverse.</p>
            <a href="#">learn more</a>
          </div>
        </Grid>
      </Grid>
    </div>
  </Container>
</Grid>
</>                 
    )
}

export default Invertingverseprojectupdates

