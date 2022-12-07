import { Box, Button, Divider, Grid, Typography } from '@mui/material'
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
type Props = {}

const Story = (props: Props) => {
    return (
        <>
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
                                Headline <ListIcon id="iconofheadlinesinbox" />
                                <FormatBoldIcon id="iconofheadlinesinbox" />
                                <FormatItalicIcon id="iconofheadlinesinbox" />
                                <AddLinkIcon id="iconofheadlinesinbox" />
                                <ImageIcon id="iconofheadlinesinbox" />
                                <VideoLibraryIcon id="iconofheadlinesinbox" />
                                <VolumeUpIcon id="iconofheadlinesinbox" />
                            </Typography>
                            <Divider />
                            <Typography id="paraofstoryscreen2">
                                Write about your project like you're explaining it to a friend..
                            </Typography>
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
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <Typography id="Typoheadingofgrid2">
                                Risks and challenges
                            </Typography>
                            <Typography id="paraofstoryscreen">
                                <br></br>Be honest about the potential risks and challenges of this <br></br>project and how you plan to overcome them to complete it.
                            </Typography>
                        </Grid>
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <Box id="boxofstoryscreen2">
                                <Typography id="paraofstoryscreen3">
                                    Common risks and challenges you may want to address include budgeting, timelines for rewards and the project itself, the size of your audience...
                                </Typography>
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
                        <Button id="Buttonofbackinrewards" ><ArrowBackIosIcon id="Buttonofbackinrewards" />Back to rewards</Button>
                    </Grid>
                    <Grid xs={12} sm={10} md={8} lg={6} id="ButtonofStORYforSave">
                        <Button variant="contained" color="primary" id="ButtonofStORYforSave">Save</Button>
                    </Grid >
                    <br></br>
                </Grid>
            </Grid>

        </>
    )
}

export default Story;