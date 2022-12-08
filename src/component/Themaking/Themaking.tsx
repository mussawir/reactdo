import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import hot05 from  '../images/hot05.png';
import hot06 from  '../images/hot06.png';
import hot07 from  '../images/hot07.png';
import hot08 from  '../images/hot08.png';
import  '../Themaking/Themaking.css';
type Props = {}

function Themaking (props: Props) {
    return (
 <>
<Grid className='making-sec'>
  <Container maxWidth="lg">
    <h4>THE MAKING OF</h4>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
        <Grid item xs={3}>
          <div className='making-box'>
            <img src={hot05}/>
            {/* <h3>News</h3> */}
            <h2>Building a More Diverse Creative Ecosystem Through Forward Funds</h2>
            <p>What we've learned so far from our Forward Funds program, which connects charitable orgs with Kickstarter campaigns that align with their missions.</p>
            <a href="#">Read more</a>
          </div>         
        </Grid>
        <Grid item xs={3}>
          <div className='making-box'>
            <img src={hot06}/>
            {/* <h3>News</h3> */}
            <h2>Building a More Diverse Creative Ecosystem Through Forward Funds</h2>
            <p>What we've learned so far from our Forward Funds program, which connects charitable orgs with Kickstarter campaigns that align with their missions.</p>
            <a href="#">Read more</a>
          </div>         
        </Grid>
        <Grid item xs={3}>
          <div className='making-box'>
            <img src={hot07}/>
            {/* <h3>News</h3> */}
            <h2>Building a More Diverse Creative Ecosystem Through Forward Funds</h2>
            <p>What we've learned so far from our Forward Funds program, which connects charitable orgs with Kickstarter campaigns that align with their missions.</p>
            <a href="#">Read more</a>
          </div>         
        </Grid>
        <Grid item xs={3}>
          <div className='making-box'>
            <img src={hot08}/>
            {/* <h3>News</h3> */}
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

export default Themaking