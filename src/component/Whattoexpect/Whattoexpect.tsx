import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import  '../Whattoexpect/Whattoexpect.css';

type Props = {}

function Whattoexpect (props: Props) {
    return (
<>
<Grid className='what-to-expect-section'>
         <Container maxWidth="lg">
           <div>
             <h6>What to expect</h6>
             <h3>Fundraising on <span>Investingverse</span><br></br> takes just a few minutes</h3> 
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
               <Grid item xs={4}>
                 <div className='what-to-expect-box'>
                   <h4>1</h4>
                   <h2>Start with the basics</h2>
                   <p>Kick things off with your name and location.</p>
                 </div>
               </Grid>
               <Grid item xs={4}>
                 <div className='what-to-expect-box what-to-expect-box-shape'>
                   <h4>2</h4>
                   <h2>Tell your story</h2>
                   <p>We'll guide you with tips along the way.</p>
                 </div>
               </Grid>
               <Grid item xs={4}>
                 <div className='what-to-expect-box'>
                   <h4>3</h4>
                   <h2>Share with friends and family</h2>
                   <p>People out there want to help you.</p>
                 </div>
               </Grid>
             </Grid>
           </div>
         </Container>
       </Grid>
</>                
    )
}

export default Whattoexpect
