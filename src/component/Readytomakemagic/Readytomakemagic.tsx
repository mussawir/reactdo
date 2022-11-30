import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import magic from '../images/magic.png';
import '../Readytomakemagic/Readytomakemagic.css'

type Props = {}

function Readytomakemagic(props: Props) {
    return (
<>
<Grid className='inverting-verse-project-updates'>
  <Container maxWidth="lg">
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
        <Grid item xs={5}>
          <div className='inverting-verse-project-updates-left-col'>
            <img src={magic} alt="" />
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className='inverting-verse-project-updates-right-col'>
            <h2>Ready to make magic?</h2>
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

export default Readytomakemagic

