import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../../FAQ/FaqCard/CardStyle.css';
export const Cards = () => {
    return (
        <Box>
            <Grid id='Main'>
                <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography id='We'>
                        WE ALSO RECOMMEND
                    </Typography>
                    <a href="" id='btn-D'>Discover more</a>
                </Grid>
                <Grid id='cards-main' spacing={4} >
                    <Grid xs={12} sm={10} md={6} lg={6}>
                    <Grid id='card-1'>
                        <img src="https://ksr-ugc.imgix.net/assets/039/396/390/a772132c83a4680f1b04a0076cddc07b_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1670263370&auto=format&frame=1&q=92&s=1b5e2270ac3288bdd9c064032ffed424" alt="" />

                        <Typography id='T-1'>ENCORE: BRONZE - THE ART OF <br></br> LIAM SHARP </Typography>
                        <Typography id='Desc'> A prestige art book with an in-depth biography of the artist by Dave     Gillette, and a foreword by Scott Dunbier.
                        </Typography>
                        <Typography id='By'> By Sharpy</Typography>

                    </Grid>
                    </Grid>

                    <Grid xs={12} sm={10} md={6} lg={6}>
                    <Grid id='card-2'>
                        <img src="https://ksr-ugc.imgix.net/assets/039/368/132/305c9f53a2f1eb20ebd9f2614acf2a92_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1669910345&auto=format&frame=1&q=92&s=df65a18c7abcadff632f96a1421e1376" alt="" />

                        <Typography id='T-2'>Jungle Dangers - Book One</Typography>
                        <Typography id='Desc'> Jungle Dangers - Book One is a collection of four vore mini-comics featuring the misadventures of the buxom blonde jungle girl Ayla.
                        </Typography>
                        <Typography id='By'>By Secret Stash Studios</Typography>

                    </Grid>
                    </Grid>

                    <Grid xs={12} sm={10} md={6} lg={6}>
                    <Grid id='card-3'>
                        <img src="https://ksr-ugc.imgix.net/assets/039/455/922/7c4506766444c9aa21ca4e1a14659403_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1670953529&auto=format&frame=1&q=92&s=e9be51eb3942f871a30f5a402608fefe" alt="" />

                        <Typography id='T-3'>Jungle Jade #1 - Adults-only 1st <br></br> issue, Poster and Hardcover </Typography>
                        <Typography id='Desc'> When vine-swinging Jade encounters an evil new enemy, she has to figure out what's real and make her escape in this amazing new series!
                        </Typography>
                        <Typography id='By'> By Underglow Comics</Typography>
                    </Grid>
                    </Grid>
                    <Grid xs={12} sm={10} md={6} lg={6}>
                    <Grid id='card-4'>
                        <img src="https://ksr-ugc.imgix.net/assets/039/411/897/5b12c7c80813cf60e00c5b72e9413c7d_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1670419993&auto=format&frame=1&q=92&s=dbd67544fa2f776d012fe704ddfd6c93" alt="" />
                        <Typography id='T-4'>Crown of Fire #1 </Typography>
                        <Typography id='Desc'> A fully painted fantasy graphic novel in the spirit of Ray Harryhausen & Heavy Metal! Mature Readers "Inferno" version also available!
                        </Typography>
                        <Typography id='By'> By David Sandoval</Typography>

                    </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}