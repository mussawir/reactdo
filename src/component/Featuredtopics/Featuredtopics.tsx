import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../Featuredtopics/Featuredtopics.css"
import Typography from '@mui/material/Typography';
import SellIcon from '@mui/icons-material/Sell';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Featuredtopics01 from  '../images/Featuredtopics01.png';
import Featuredtopics02 from  '../images/Featuredtopics02.png';
import Featuredtopics03 from  '../images/Featuredtopics03.png';
import Featuredtopics04 from  '../images/Featuredtopics04.png';


const Featuredtopics = () => {
    return (

        <Box sx={{ flexGrow: 1 }} id="box1">
            <Grid container spacing={0} columns={12} id="Grid1">
                <Grid  xs={12} sm={10} md={12} lg={6}>
                    <Grid id="con1">
                        <Typography id="t1">
                            What to expect
                        </Typography>
                        <Typography id="t2">
                            Featured Topics
                        </Typography>
                        <img src={Featuredtopics01} id="t9"></img>
                        <Typography id="t7">
                            Spellbound: Arcane Tools for Witchcraft and Magic and RPG's
                        </Typography>
                        <Typography id="t9">
                            A collection of handcrafted Alter Tools for Divination Spellcraft and Gaming.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg={6} id="con3">
                    <Typography id="t3">
                        Recommended for you
                    </Typography>
                    <Typography id="t8">
                        Related Topics
                    </Typography>
                    <Grid container spacing={2} columns={12} id="main1">
                    <Grid item xs={6}  id="img3">
                    <img src={Featuredtopics02}  id="img3"></img>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography id="t4">Parentheses books</Typography>
                        <Typography id="t5">20% funded</Typography>
                        <Typography id="t6">By parentheses books</Typography>
                        <Grid id='fdsfsfscs'>
                        <SellIcon />
                        <RecommendIcon />
                        <ThumbDownIcon />
                        </Grid>
                    </Grid>
                </Grid>
                <hr id='hr1'></hr>
                <Grid container spacing={2} columns={12} id="main1">
                    <Grid item xs={6} id="img3">
                    <img src={Featuredtopics03}  id="img3"></img>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography id="t4">Parentheses books</Typography>
                        <Typography id="t5">20% funded</Typography>
                        <Typography id="t6">By parentheses books</Typography>
                        <Grid id='fdsfsfscs'>
                        <SellIcon />
                        <RecommendIcon />
                        <ThumbDownIcon />
                        </Grid>
                    </Grid>
                </Grid>
                <hr id='hr1'></hr>
                <Grid container spacing={2} columns={12} id="main">
                    <Grid item xs={6}  id="img3">
                    <img src={Featuredtopics04}  id="img3"></img>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography id="t4">Parentheses books</Typography>
                        <Typography id="t5">20% funded</Typography>
                        <Typography id="t6">By parentheses books</Typography>
                      <Grid id='fdsfsfscs'>
                        <SellIcon />
                        <RecommendIcon />
                        <ThumbDownIcon />
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Featuredtopics