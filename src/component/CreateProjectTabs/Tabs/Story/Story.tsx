import { Box, Button, Divider, Grid, Input, InputBase, Typography } from '@mui/material'
import React from 'react'
import "../Story/Story.css"
import ListIcon from '@mui/icons-material/List';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import { useParams, useNavigate,Link } from "react-router-dom";
import axios from "axios";
import Footer from '../../../Footer/Footer';
import TopBar from './../../../Dashborad/TopBar/TopBar';
type Props = {}

const Story = (props: Props) => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [risksChallenges, setRisksChallenges] = React.useState("");
    const [description, setDescription] = React.useState("");
    console.log('====================================');
    console.log(risksChallenges,description);
    console.log('====================================');
    const handleSubmit = (e: any) => {
         e.preventDefault();
         console.log(projectId);
         axios.patch("http://localhost:5000/project/story/" + projectId, {
            description: description,
            risksChallenges: risksChallenges,
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
     
          toMyteam(projectId);
       };
 
       const toMyteam = (projectId: any) => {
         // 👇️ navigate to /
         navigate("/myteam/" + projectId);
       };
    return (

        <>
        <TopBar/>
            <Grid>
                <Grid id="Grid1OfStoryScreen">
                    <Typography id="typo1ofstory">
                        Introduce your project
                    </Typography>
                    <Typography id="typo1ofstory2">Tell people why they should be excited about your project. Get specific but be clear and be brief.</Typography>
                </Grid>
                <Divider />
                <Grid id="TypOofStory2">
                    <Typography id="Typoheadingofgrid2">
                        Project description
                    </Typography>
                    <Typography id="paraofstoryscreen">
                        Describe what you're raising funds to do, why you care about it, how you plan to make it happen,<br></br> and who you are. Your description should tell backers everything they need to know. If possible,<br></br> include images to show them what your project is all about and what rewards look like. Read<br></br> more about telling your story
                    </Typography>
                    <Grid xs={12} sm={10} md={8} lg={6}>
                        <br></br>

                        <Box id="boxofstoryscreen">
                            <Typography id="headlineofboxstory">
                                Headline <ListIcon id="iconofheadlinesinbox"  />
                                <FormatBoldIcon id="iconofheadlinesinbox" />
                                <FormatItalicIcon id="iconofheadlinesinbox" />
                                <AddLinkIcon id="iconofheadlinesinbox" />
                                <ImageIcon id="iconofheadlinesinbox" />
                                <VideoLibraryIcon id="iconofheadlinesinbox" />
                                <VolumeUpIcon id="iconofheadlinesinbox" />
                            </Typography>
                            <Divider />
                            <Grid >

                                <input className="input"
                                value={description}
                                onChange={(e) => {
                                  setDescription(e.target.value);
                                }}
                                    type="text"
                                    placeholder="Write about your project that you're explaining it to a friend...  " 
                                    
                                    />
                           
                            </Grid>

                        </Box>

                    </Grid>
                </Grid>
                <br></br>
                <br></br>
                <Divider />
                <br></br>
                <br></br>
                <Grid >
                    <Grid container id="TypOofStory3">
                        <Grid xs={12} sm={10} md={8} lg={5}>
                            <Typography id="Typoheadingofgrid2">
                                Risks and challenges
                            </Typography>
                            <Typography id="paraofstoryscreen">
                                <br></br>Be honest about the potential risks and challenges of this <br></br>project and how you plan to overcome them to complete it.
                            </Typography>
                        </Grid>
                        <Grid xs={12} sm={10} md={8} lg={7}>
                            <Box >
                              
                              <TextField
                  required
                  style={{ width: "100%" }}
                  id="boxofstoryscreen2"
                  rows={6}
                  className="outlined-multiline-static"
                  type="text"
                  placeholder="Common risks and challenges you may want to address include budgeting, timelines for rewards and the project itself, the size of your audience..."
                  value={risksChallenges}
                  onChange={(e) => {
                    setRisksChallenges(e.target.value);
                  }}
                />

                            </Box>
                            <Box>
                                <Button color="success" id="buttonofstoryscreen4">
                                    <LocationOnIcon />  Communicate risks and challenges up front to set proper expactations. Learn more...
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid id="GRIDoFlAST" container>
                    <Grid xs={12} sm={10} md={8} lg={6} id="Buttonofbackinrewards">
                        <Button id="Buttonofbackinrewards" ><ArrowBackIosIcon id="Buttonofbackinrewards" />Back to Funding</Button>
                    </Grid>
                    <Grid xs={12} sm={10} md={8} lg={6} id="ButtonofStORYforSave">
                        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} id="ButtonofStORYforSave">Save</Button>
                    </Grid >
                    <br></br>
                </Grid>
            </Grid>
<Footer/>
        </>
    )
}

export default Story;