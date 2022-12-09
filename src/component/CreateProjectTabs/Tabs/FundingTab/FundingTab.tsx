import { Box, Button, Divider, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Funding.css";
type Props = {}

const FundingTab = (props: Props) => {
    return (
        <>
            <Grid>
            <Grid xs={12} sm={10} md={8} lg={6}>
        <Typography id="PeopleScreensTypo1">
         Raise Funding 
        </Typography>
        <Typography id="PeopleScreensTypo2">
          Give backers an idea of who you are, and add collaborators if you work with a team.
        </Typography>
      </Grid>
      <Divider id="dividerafterpeopletypo2" />
                <Grid container id="TypOofStory3">
                    <Grid xs={10} sm={8} md={6} lg={6}>
                        <Typography id="Typoheadingofgrid2">
                            Funding Method
                        </Typography>
                        <Typography id="paraofstoryscreen">
                            <br></br>Be honest about the potential risks and challenges of this <br></br>project and how you plan to overcome them to complete it.
                        </Typography>
                    </Grid>
                    <Grid xs={10} sm={8} md={6} lg={6} id="Grid2peopleScreen4">

                        <Box
                            sx={{
                                width: 600,
                                maxWidth: '120%',
                                borderRadius: '0%',

                            }}
                        >
                            <Typography id="anyt">Amount</Typography>
                            <TextField fullWidth placeholder="$100,000" id="fullWidth" />
                            <Button id="buttoonssofpeople9" variant='contained'>
                            Confirm
                        </Button>
                        </Box>
                        
                        <br></br>
                        <br></br>
                        <Box
                            sx={{
                                width: 600,
                                maxWidth: '120%',
                                borderRadius: '0%',

                            }}
                        >
                            <Typography id="anyt">Investor Share</Typography>
                            <TextField fullWidth placeholder="50%" id="fullWidth" />
                            <Button id="buttoonssofpeople9" variant='contained'>
                            Confirm
                        </Button>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Grid id="GRIDoFlAST" container>
                <Grid xs={12} sm={10} md={8} lg={6} id="Buttonofbackinrewards">
                    <Button id="Buttonofbackinrewards" ><ArrowBackIosIcon id="Buttonofbackinrewards" />Back to Basic</Button>
                </Grid>
                <Grid xs={12} sm={10} md={8} lg={6} id="ButtonofStORYforSave">
                    <Button variant="contained" color="primary" id="ButtonofStORYforSave">Next: Story</Button>
                </Grid >
                <br></br>
            </Grid>
        </>
    )
}

export default FundingTab;