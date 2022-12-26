import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { blue, green, purple, red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import "../Updates/UpdateStyle.css"
import { Box, Button, Divider, Grid, Stack } from '@mui/material';


type Props = {}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Updates = (props: Props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Grid xs={12} sm={10} md={8} lg={6} id="wholeecardd89" >
            <Card sx={{ maxWidth: 700 }} id="wholeecardd89">


                <Grid xs={12} sm={10} md={8} lg={6} >
                    <Typography id="texxtt142">UPDATE # 4</Typography>
                    <Typography id="texxtt12">Ain’t No Stopping Us Now!</Typography>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }

                        title="Philip Arneill/James Catchpole"
                        subheader="December 24, 2022"
                    />
                </Grid>
                <Divider></Divider>
                <CardContent>
                    <Typography variant="body2" id="wholetext123">
                        We did not think we’d be writing this update quite so soon, but we are SO thrilled to tell you that we have hit just our initial funding goal in less than six days – thanks to your kind support and generosity. The campaign will continue for another 28 days so there’s still plenty of opportunity for others to back TOKYO JAZZ JOINTS by pledging and choosing the available rewards. Feel free to share the Kickstarter link far and wide, and hold tight for more updates! We can’t wait to share the next steps of this exciting process with you. Kanpai!
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ChatBubbleIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <img src='https://ksr-ugc.imgix.net/projects/3636614/posts/3694949/image-442106-original.jpg?ixlib=rb-4.0.2&w=560&v=1671822678&auto=format&frame=1&q=92&s=dc44ea098a9260393d6edc499e279686' />
                        </Grid>
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <img src='https://ksr-ugc.imgix.net/projects/3636614/posts/3694949/image-442107-original.jpg?ixlib=rb-4.0.2&w=560&v=1671822695&auto=format&frame=1&q=92&s=ac5c945147c6c401dcb3e93281d38209' />
                        </Grid>
                        <Divider></Divider>
                        <Grid xs={12} sm={10} md={8} lg={6}>

                            <Stack direction='row' id="newstack12"  >
                                <Button variant="outlined" startIcon={<FavoriteIcon />}>
                                    Like
                                </Button>
                                <Typography id="peopletexxtt12"> <a href="https://www.kickstarter.com/help/hc/sections/115001107133">18 people</a> like this update</Typography>
                            </Stack>
                        </Grid>
                        <Divider></Divider>

                        <Grid xs={12} sm={10} md={8} lg={6} id="newstack1234">
                            <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
                                Previous
                            </Button>
                            <Typography id="newstack123">
                                Comments
                            </Typography>
                            <Box id="boxcl09" >
                                Only backers can post comments. <a href="https://www.kickstarter.com/help/hc/sections/115001107133">Log in</a> 

                            </Box>

                            <Box id="boxcl009" >
                                <Box id="boxcv78">
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }

                                        title="David Fitzgerald"
                                        subheader="2 days ago"
                                    />
                                    <Typography>
                                    🍾🎉
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>

            <Card sx={{ maxWidth: 700 }} id="wholeecardd891">


                <Grid xs={12} sm={10} md={8} lg={6} >
                    <Typography id="texxtt142">UPDATE # 3</Typography>
                    <Typography id="texxtt12">Nearly there…</Typography>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }   
                        title="Philip Arneill/James Catchpole"
                        subheader="December 23, 2022"
                    />
                </Grid>
                <Divider></Divider>
                <CardContent>
                    <Typography variant="body2" id="wholetext123">
                    Incredibly, in less than 5 days we are very close to our initial funding goal and are so grateful to you all. Thank you so much and stayed tuned for more updates!
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ChatBubbleIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <img src='https://ksr-ugc.imgix.net/projects/3636614/posts/3694600/image-442098-original.jpg?ixlib=rb-4.0.2&w=560&v=1671752827&auto=format&frame=1&q=92&s=d8e6d5e31483c5d32375636861744a41' />
                        </Grid>
                        
                        <Divider></Divider>
                        <Grid xs={12} sm={10} md={8} lg={6}>

                            <Stack direction='row' id="newstack12"  >
                                <Button variant="outlined" startIcon={<FavoriteIcon />}>
                                    Like
                                </Button>
                                <Typography id="peopletexxtt12"> <a href="https://www.kickstarter.com/help/hc/sections/115001107133">11 people</a> like this update</Typography>
                            </Stack>
                        </Grid>
                        <Divider></Divider>

                        <Grid xs={12} sm={10} md={8} lg={6} id="newstack1234">
                            <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
                                Previous
                            </Button>
                            <Typography id="newstack123">
                                Comments
                            </Typography>
                            <Box id="boxcl09" >
                                Only backers can post comments. <a href="https://www.kickstarter.com/help/hc/sections/115001107133">Log in</a> 

                            </Box>

                            <Box id="boxcl00999" >
                                <Typography id="buttontext123">
                               
                                <IconButton aria-label="Message">
                                  
                        <ChatBubbleIcon />
                        
                    </IconButton>
                    No commnets yet.
                                </Typography>
                            </Box>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>


            <Card sx={{ maxWidth: 700 }} id="wholeecardd8989">


                <Grid xs={12} sm={10} md={8} lg={6} >
                    <Typography id="texxtt142">UPDATE # 2</Typography>
                    <Typography id="texxtt12">60% – Minds officially blown…</Typography>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }

                        title="Philip Arneill/James Catchpole"
                        subheader="December 24, 2022"
                    />
                </Grid>
                <Divider></Divider>
                <CardContent>
                    <Typography variant="body2" id="wholetext123">
                    Hello Everyone, We just wanted to share a quick update to let you know that, incredibly, in less than 72 hours we have now funded 60% of our photobook project. Your kind support and generosity has gone far beyond our expectations and we are truly very grateful for all the kind comments and messages we’ve had from so many different countries. Thank you. Onwards and upwards!


                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ChatBubbleIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <img src='https://ksr-ugc.imgix.net/projects/3636614/posts/3691830/image-442073-original.jpg?ixlib=rb-4.0.2&w=560&v=1671603410&auto=format&frame=1&q=92&s=4ff2c0471163453a800a23921132413b' />
                        </Grid>
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <img src='https://ksr-ugc.imgix.net/projects/3636614/posts/3691830/image-442074-original.jpg?ixlib=rb-4.0.2&w=560&v=1671603419&auto=format&frame=1&q=92&s=56b17a1a40d3e966cf1df4db71bc69f4' />
                        </Grid>
                        <Divider></Divider>
                        <Grid xs={12} sm={10} md={8} lg={6}>

                            <Stack direction='row' id="newstack12"  >
                                <Button variant="outlined" startIcon={<FavoriteIcon />}>
                                    Like
                                </Button>
                                <Typography id="peopletexxtt12"> <a href="https://www.kickstarter.com/help/hc/sections/115001107133">9 people</a> like this update</Typography>
                            </Stack>
                        </Grid>
                        <Divider></Divider>

                        <Grid xs={12} sm={10} md={8} lg={6} id="newstack1234">
                            <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
                                Previous
                            </Button>
                            <Typography id="newstack123">
                                Comments
                            </Typography>
                            <Box id="boxcl09" >
                                Only backers can post comments. <a href="https://www.kickstarter.com/help/hc/sections/115001107133">Log in</a> 

                            </Box>

                            <Box id="boxcl00999" >
                                <Typography id="buttontext123">
                               
                                <IconButton aria-label="Message">
                                  
                        <ChatBubbleIcon />
                        
                    </IconButton>
                    No commnets yet.
                                </Typography>
                            </Box>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>


            <Card sx={{ maxWidth: 700 }} id="wholeecardd86759">


                <Grid xs={12} sm={10} md={8} lg={6} >
                    <Typography id="texxtt142">UPDATE # 1</Typography>
                    <Typography id="texxtt12">20% already?! Thank you…</Typography>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }

                        title="Philip Arneill/James Catchpole"
                        subheader="December 24, 2022"
                    />
                </Grid>
                <Divider></Divider>
                <CardContent>
                    <Typography variant="body2" id="wholetext123">
                    We did not think we’d be writing this update quite so soon, but we are SO thrilled to tell you that we have hit just our initial funding goal in less than six days – thanks to your kind support and generosity. The campaign will continue for another 28 days so there’s still plenty of opportunity for others to back TOKYO JAZZ JOINTS by pledging and choosing the available rewards. Feel free to share the Kickstarter link far and wide, and hold tight for more updates! We can’t wait to share the next steps of this exciting process with you. Kanpai!We did not think we’d be writing this update quite so soon, but we are SO thrilled to tell you that we have hit just our initial funding goal in less than six days – thanks to your kind support and generosity. The campaign will continue for another 28 days so there’s still plenty of opportunity for others to back TOKYO JAZZ JOINTS by pledging and choosing the available rewards. Feel free to share the Kickstarter link far and wide, and hold tight for more updates! We can’t wait to share the next steps of this exciting process with you. Kanpai!
                    </Typography>

                    <Typography id="philjame123">
                    Philip & James
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ChatBubbleIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid xs={12} sm={10} md={8} lg={6}>
                            <img src='https://ksr-ugc.imgix.net/projects/3636614/posts/3691828/image-442019-original.jpg?ixlib=rb-4.0.2&w=560&v=1671454053&auto=format&frame=1&q=92&s=8bd6b8eaa987d61ef959c191a52a1aa2' />
                        </Grid>
                       
                        <Divider></Divider>
                        <Grid xs={12} sm={10} md={8} lg={6}>

                            <Stack direction='row' id="newstack12"  >
                                <Button variant="outlined" startIcon={<FavoriteIcon />}>
                                    Like
                                </Button>
                                <Typography id="peopletexxtt12"> <a href="https://www.kickstarter.com/help/hc/sections/115001107133">5 people</a> like this update</Typography>
                            </Stack>
                        </Grid>
                        <Divider></Divider>

                        <Grid xs={12} sm={10} md={8} lg={6} id="newstack1234">
                            <Grid xs={12} sm={10} md={8} lg={6}>
                            <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />} id="next567656">
                                Next
                            </Button>
                            </Grid>
                            <Typography id="newstack1786723">
                                Comments
                            </Typography>
                            <Box id="boxcl09" >
                                Only backers can post comments. <a href="https://www.kickstarter.com/help/hc/sections/115001107133">Log in</a> 

                            </Box>

                            <Box id="boxcl009" >
                                <Box id="boxcv78">
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }

                                        title="David Fitzgerald"
                                        subheader="2 days ago"
                                    />
                                    <Typography>
                                    love that you're doing this - all the best!!
                                    </Typography>
                                </Box>
                                <Box id="boxcv78987">
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }

                                        title="David Fitzgerald"
                                        subheader="2 days ago"
                                    />
                                    <Typography>
                                    One of my former students let me know about your book. I'm a fan of the podcast and your photos, and have visited a fair number of jazz kissa over the years. They are kind of icons of Showa era rebellions, so it is always a thrill to experience survivors. Looking forward to receiving the book. Omedettou! Felicitations! Mazel tov! Congratulations!!
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

export default Updates