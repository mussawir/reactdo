import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import '../Whattoexpect/Whattoexpect.css';

type Props = {}

function Whattoexpect(props: Props) {
  return (
    <>
      <Grid className='what-to-expect-section'>
        <Grid maxWidth="lg" >
          <Grid xs={12} sm={12} md={12} lg={12}>
            <Grid xs={6} sm={6}>
              <h6 id="h6forwhattoexpect">What to expect</h6>
              <h3 id="h3forwhattoexpect">Fundraising on <span>Investingverse</span><br></br> takes just a few minutes</h3>

            </Grid>
            <Grid xs={6} sm={6} lg={12} md={12}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 4 }}>
              <Grid xs={4} sm={4} md={4} lg={4} id="hgvhgvgvg">
                <div className='what-to-expect-box'>
                  <h4 id="h1forwhattoexpect">1</h4>
                  <h2 id="h2forwhattoexpect">Start with the basics</h2>
                  <p id="pforwhattoexpect">Kick things off with your name and location.</p>
                </div>
              </Grid>
              <Grid xs={4} sm={4} md={4} lg={4}>
                <div className='what-to-expect-box what-to-expect-box-shape'>
                  <h4 id="h1forwhattoexpect">2</h4>
                  <h2 id="h2forwhattoexpect">Tell your story</h2>
                  <p id="pforwhattoexpect">We'll guide you with tips along the way.</p>
                </div>
              </Grid>
              <Grid xs={4} sm={4} md={4} lg={4}>
                <div className='what-to-expect-box'>
                  <h4 id="h1forwhattoexpect">3</h4>
                  <h2 id="h2forwhattoexpect">Share with friends and family</h2>
                  <p id="pforwhattoexpect">People out there want to help you.</p>
                </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Whattoexpect