import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import projectimage1 from "../images/projectimage1.jpg";
import projectimage2 from "../images/projectimage2.jpg";
import projectimage3 from "../images/projectimage3.jpg";
import projectimage4 from "../images/projectimage4.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";


import "../StartProject/StartProjectStyle.css";





const StartProject = () => {
  const navigate = useNavigate();



  const HandleProject =() =>{
    if(localStorage.getItem("token")){
      navigate("/categories");
    }else{
      navigate("/login");
    }
    };
  return (
    <>
    <Header/>
    
    <Box>
      <Grid id="MainSection">
        <Typography id="typoOffirstHeading">
          Bring your creative project{" "}
        </Typography>
        <Typography id="typoOffirstHeading">to life.</Typography>
    
        <Button variant="contained" onClick={HandleProject} color="success" id="buttonsuccess">
        Start a project
         {/* <Link  to="/categories" id="starProject">  </Link>  */}
        </Button>
        <Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item lg={9}>
                <Grid id="imgGrid1">
                  <img src={projectimage1} id="image1" alt="LeftSide-Image" />
                </Grid>
              </Grid>
              <Grid item lg={5} id="mainimg1" columnSpacing={2}>
                <Grid item lg={20} id="imgGrid2">
                  <Grid>
                    {" "}
                    <img src={projectimage2} id="image2" alt="rightside-Image" />
                  </Grid>
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Grid item lg={20} id="imgGrid2">
                  <Grid>
                    {" "}
                    <img src={projectimage3} id="image2" alt="rightside-Image" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Box sx={{ flexGrow: 1 }} id="boxofSec2">
          <Grid>
            <Typography id="Boxtypo2">
              We see Kickstarter as a home for creative minds and a wonderful
              platform; where people who believe, respect, and see the vision
              can support an idea and make it a reality.
            </Typography>
            <Typography id="Boxtypo3">— De La Soul</Typography>
            <br></br>
            <br></br>
            <br></br>
          </Grid>
        </Box>
        <Grid id="Gridsec3">
          <Typography id="Boxofsec3">
            A Kickstarter project does more than raise money. It builds
            community around your work.
          </Typography>
        </Grid>
        <Box sx={{ flexGrow: 1 }} id="boxofSEC3">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={7}>
              <Grid>
                <Typography id="HeadingTextforsec3">
                  What can I use Kickstarter to fund?
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid>
                <Typography id="paraofsec3">
                  Kickstarter is specifically for creative projects in the
                  following categories: Art, Comics, Crafts, Dance, Design,
                  Fashion, Film & Video, Food, Games, Journalism, Music,
                  Photography, Publishing, Technology, and Theater. Make an
                  album, write a book, create an immersive theater experience,
                  score a film — you name it. Read more about{" "}
                  <a href="#">our project guidelines</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} id="boxofSEC3">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={7}>
              <Grid>
                <Typography id="HeadingTextforsec3">
                  Who can I get pledges from?
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid>
                <Typography id="paraofsec3">
                  Millions of people visit Kickstarter every week, but support
                  always begins with people you know. Friends, fans, and the
                  communities you’re a part of will likely be some of your
                  earliest supporters, not to mention your biggest resources for
                  spreading the word about your project.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} id="boxofSEC3">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={7}>
              <Grid>
                <Typography id="HeadingTextforsec3">
                  How much work is it to run a project?
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid>
                <Typography id="paraofsec3">
                  Every Kickstarter project has its share of exhilarating and
                  challenging moments, but the amount of work generally depends
                  on the size and complexity of the project.
                  <br></br>
                  Expect the first few days after launch to be very busy as you
                  spread the word to your community, answer questions from
                  potential backers, and more. You may need to spend the last
                  few days rallying your social networks in order to reach your
                  funding goal.
                  <br></br>
                  Projects sometimes take on a life of their own, and in that
                  case you should expect to spend more time creating and
                  fulfilling rewards.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} id="boxofSEC3">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={7}>
              <Grid>
                <Typography id="HeadingTextforsec3">
                  How do I get in touch with questions?
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid>
                <Typography id="paraofsec3">
                  You can reach out with your questions through this{" "}
                  <a href="#">contact form</a>. We also recommend taking a look
                  at <a href="#">our FAQs</a> for more detailed information,
                  along with the <a href="#">creator handbook</a> for guidance
                  on starting and running a project.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <br></br>
        <br></br>
        <br></br>
        <Box id="boxofSEC4">
          <Grid>
            {" "}
            <img src={projectimage4} id="image4" alt="rightside-Image" />
          </Grid>
        </Box>
      </Grid>
    </Box>
<Footer/>
    </>
  );
};

export default StartProject;
