import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import hot01 from  '../images/hot01.png';
import hot02 from  '../images/hot02.png';
import hot03 from  '../images/hot03.png';
import hot04 from  '../images/hot04.png';
import  '../Hotoffthepress/Hotoffthepress.css';

type Props = {}

function Hotoffthepress (props: Props) {
    return (
 <>
<Grid className='our-press-sec'>
  <Container maxWidth="lg">
  <h5>Our Press</h5>
    <h4>Hot off the press</h4>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
        <Grid item xs={3}>
          <div className='our-press-box'>
            <img src={hot01}/>
            <h3>News</h3>
            <h2>Building a More Diverse Creative Ecosystem Through Forward Funds</h2>
            <p>What we've learned so far from our Forward Funds program, which connects charitable orgs with Kickstarter campaigns that align with their missions.</p>
            <a href="#">Read more</a>
          </div>         
        </Grid>
        <Grid item xs={3}>
          <div className='our-press-box'>
            <img src={hot02}/>
            <h3>News</h3>
            <h2>Building a More Diverse Creative Ecosystem Through Forward Funds</h2>
            <p>What we've learned so far from our Forward Funds program, which connects charitable orgs with Kickstarter campaigns that align with their missions.</p>
            <a href="#">Read more</a>
          </div>         
        </Grid>
        <Grid item xs={3}>
          <div className='our-press-box'>
            <img src={hot03}/>
            <h3>News</h3>
            <h2>Building a More Diverse Creative Ecosystem Through Forward Funds</h2>
            <p>What we've learned so far from our Forward Funds program, which connects charitable orgs with Kickstarter campaigns that align with their missions.</p>
            <a href="#">Read more</a>
          </div>         
        </Grid>
        <Grid item xs={3}>
          <div className='our-press-box'>
            <img src={hot04}/>
            <h3>News</h3>
            <h2>Building a More Diverse Creative Ecosystem Through Forward Funds</h2>
            <p>What we've learned so far from our Forward Funds program, which connects charitable orgs with Kickstarter campaigns that align with their missions.</p>
            <a href="#">Read more</a>
          </div>         
        </Grid>
      </Grid>

  </Container>
</Grid>
</>                                     
    )
}

export default Hotoffthepress
