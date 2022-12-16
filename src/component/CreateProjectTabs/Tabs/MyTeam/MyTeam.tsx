import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import "../MyTeam/MyTeam.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams, useNavigate,Link } from "react-router-dom";
import axios from "axios";
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import TopBar from './../../../Dashborad/TopBar/TopBar';

type Props = {}

const MyTeam = (props: Props) => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [ivProfileUrl, setIvProfileUrl] = React.useState("");
  const [paymentEmail, setPaymentEmail] = React.useState("");
 
  const handleSubmit = (e: any) => {
       e.preventDefault();
       console.log(projectId);
       axios.patch("http://localhost:5000/project/myteam/" + projectId, {
        ivProfileUrl: ivProfileUrl,
        paymentEmail: paymentEmail,
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
   
         toPaymentMethod(projectId);
     };

     const toPaymentMethod = (projectId: any) => {
       // 👇️ navigate to /
       navigate("/paymentmethod/" + projectId);
     };
  return (

    <>

    <TopBar/>
        <Grid id="mainheadingofpeopleScreen">
      <Grid xs={12} sm={10} md={8} lg={6}>
        <Typography id="PeopleScreensTypo1">
          Introduce yourself
        </Typography>
        <Typography id="PeopleScreensTypo2">
          Give backers an idea of who you are, and add collaborators if you work with a team.
        </Typography>
      </Grid>
      <Divider id="dividerafterpeopletypo2" />

      <Grid id="Grid2peopleScreen">
        <Grid xs={12} sm={12} md={8} lg={6}>
          <Typography id="ProfilePeople">
            Your profile
          </Typography>
          <Typography id="ParaOfPeoplescreen">
            This will appear on your project page and must include your<br></br> name, photo, and biography.
          </Typography>
        </Grid>
        <Grid xs={12} sm={12}   md={4} lg={4} id="Grid2peopleScreen4">

          <Box id="boxofstoryscreen4" >
            <Typography id="paraofstoryscreen3">
              Brain M
            </Typography>
            <Typography id="pfea">
              project creator
            </Typography>
            <br></br>
            <br></br>
            <Divider />
            <br></br>

            <Button id="buttoonssofpeople" variant='contained'>
              Complete your project
            </Button>
          </Box>
          
        </Grid>
      </Grid>
      <Divider id="dividerafterpeopletypo2" />
      <Grid id="Grid2peopleScreen">
        <Grid xs={12} sm={10} md={8} lg={6}>
          <Typography id="ProfilePeople">
            Vanity URL
          </Typography>
          <Typography id="ParaOfPeoplescreen">
            Create a custom URL for your profile page with at least three<br></br> characters. This will also be the beginning of your project<br></br> URL—we’ll generate that later.
          </Typography>
        </Grid>
        <Grid xs={12} sm={10} md={8} lg={4} id="Grid2peopleScreen4">

          <Box
            sx={{
              width: 650,
              maxWidth: '100%',
              borderRadius: '0%',
              marginLeft: '14%',
            }}
          >
            <Typography id="anyt">https://myinvestingverse.com/profile/</Typography>
           
            <TextField
                  style={{ width: "100%" }}
                  required
                  size="small"
                  id="outlined-required"
                  type="text"
                  value={ivProfileUrl}
                  onChange={(e) => {
                    setIvProfileUrl(e.target.value);
                  }}
                />
           
          </Box>
          <Button id="buttoonssofpeople2098" variant='contained'>
            Confirm
          </Button>
        </Grid>
      </Grid>
      <Divider id="dividerafterpeopletypo2" />
      <Grid id="Grid2peopleScreen">
        <Grid xs={12} sm={10} md={8} lg={6}>
          <Typography id="ProfilePeople">
            Collaborators (optional)
          </Typography>
          <Typography id="ParaOfPeoplescreen">
            If you're working with others, you can grant them permission <br></br>to edit this project, communicate with backers, and<br></br> coordinate reward fulfillment.
          </Typography>
        </Grid>
        <Grid xs={12} sm={10} md={8} lg={6} id="Grid2peopleScreen4">

          <Box
            sx={{
              width: 600,
              maxWidth: '120%',
              borderRadius: '0%',
              marginLeft: '15%',
              border: '1px solid grey',
              padding: '20px',
              backgroundColor: '#FBFBFA'

            }}
          >
            <Typography>Verify your email before adding collaborators</Typography>
            <Typography id="TypooFpeopleS4">If the incorrect email is shown here, update it on your account.</Typography>

          </Box>
          <br></br>
          <Box
            sx={{
              width: 620,
              maxWidth: '120%',
              borderRadius: '0%',
              marginLeft: '15%',
              padding: '10px',
              backgroundColor: '#FBFBFA'

            }}
          >
            <TextField
                  style={{ width: "100%" }}
                  required
                  size="small"
                  id="outlined-required"
                  type="text"
                  placeholder='Email...'
                  value={paymentEmail}
                  onChange={(e) => {
                    setPaymentEmail(e.target.value);
                  }}
                />
            <Button id="buttoonssofpeople3" variant='contained'>
              send Verification email
            </Button>
          </Box>

        </Grid>
      </Grid>

      <Divider id="dividerafterpeopletypo2" />
      <Grid id="Grid2peopleScreen">
        <Grid xs={12} sm={10} md={8} lg={6}>
          <Typography id="ProfilePeople">
            Demographics (optional)
          </Typography>
          <Typography id="ParaOfPeoplescreen">
            Your information helps us equitably support a diverse<br></br> creator community. We’ll only use it in connection with our<br></br> anti-discrimination research and work.          </Typography>
        </Grid>
        <Grid xs={12} sm={10} md={8} lg={6} id="Grid2peopleScreen4">

          <Box
            sx={{
              width: 623,
              maxWidth: '120%',
              borderRadius: '0%',
              marginLeft: '15%',
              padding: '10px',
              backgroundColor: '#FBFBFA'

            }}
          >
            <Button id="buttoonssofpeople3" variant='contained'>
              Go to Questions
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid id="mainLastPeopleid">
        <Grid id="GRIDoFlAST" container>
          <Grid xs={12} sm={10} md={8} lg={6} id="Buttonofbackinrewards">
            <Button id="Buttonofbackinrewards" className='thorakhiskobackbutton'><ArrowBackIosIcon className='thorakhiskobackbutton' id="Buttonofbackinrewards" />Back to story</Button>
          </Grid>
          <Grid xs={12} sm={10} md={8} lg={6} id="ButtonofStORYforSave" className="sjdncjc">
            <Typography id="hdwsw">No unsaved Changes</Typography>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} id="ButtonofStORYforSave">Next: Payment</Button>
          </Grid >
          <br></br>
        </Grid>
      </Grid>
    </Grid>

    <Footer/>
    </>

  )
}

export default MyTeam;