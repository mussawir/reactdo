import React from 'react';
import { Box, Button, Divider, Grid, Typography, TextField } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Funding.css";
import { useParams, useNavigate,Link } from "react-router-dom";
import axios from "axios";
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import TopBar from './../../../Dashborad/TopBar/TopBar';

type Props = {}

const FundingTab = (props: Props) => {
   const navigate = useNavigate();
   const { projectId } = useParams();
   const [investorShare, setInvestorShare] = React.useState("");
   const [targetAmount, setTargetAmount] = React.useState("");
   const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(projectId);
        axios.patch("http://localhost:5000/project/funding/" + projectId, {
            investorShare: investorShare,
            targetAmount: targetAmount,
          })
    
          // axios.patch("http://localhost:5000/project/basic/" + projectId, {
          //   title: title,
          //   subTitle:subTitle
          // })
          .then((res) => {
            console.log(res, "Result");
            console.log("Funding Screen Updated Data", res.data);
          })
          .catch((err) => {
            console.log(err, "error");
          });
    
         toStory(projectId);
      };

      const toStory = (projectId: any) => {
        // 👇️ navigate to /
        navigate("/story/" + projectId);
      };
    return (
        <>


        <TopBar/>
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
                            {/* <TextField fullWidth placeholder="$100,000" id="fullWidth" /> */}

                            <TextField
                  required
                  style={{ width: "100%" }}
                  size="small"
                  id="outlined-required"
                  type="text"
                  placeholder="$100,000"
                  value={investorShare}
                  onChange={(e) => {
                    setInvestorShare(e.target.value);
                  }}
                />
                        </Box>
                        <Button id="buttoonssofpeople2" variant='contained'>
                            Confirm
                        </Button>
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
                        {/* <TextField fullWidth placeholder="50%" id="fullWidth" /> */}

                        <TextField
                  required
                  style={{ width: "100%" }}
                  size="small"
                  id="outlined-required"
                  type="text"
                  placeholder="$100,000"
                  value={targetAmount}
                  onChange={(e) => {
                    setTargetAmount(e.target.value);
                  }}
                        />
                        </Box>
                        <Button id="buttoonssofpeople2" variant='contained'>
                            Confirm
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid id="GRIDoFlAST" container>
                <Grid xs={12} sm={10} md={8} lg={6} id="Buttonofbackinrewards">
                    <Button id="Buttonofbackinrewards" ><ArrowBackIosIcon id="Buttonofbackinrewards" />
                   <Link to="">Back to Basic</Link> </Button>
                </Grid>
                <Grid xs={12} sm={10} md={8} lg={6} id="ButtonofStORYforSave">
                    <Button variant="contained" type="submit" onClick={handleSubmit} color="primary" id="ButtonofStORYforSave">Next: Story</Button>
                </Grid >
                <br></br>
            </Grid>
            <Footer/>
        </>
    )
}

export default FundingTab