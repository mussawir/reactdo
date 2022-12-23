import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../TabsCampaign/Campaign.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EuroIcon from '@mui/icons-material/Euro';
import CardMedia from '@mui/material/CardMedia';
import {  Button, Container, Divider, Grid, InputAdornment,  Stack, TextField } from '@mui/material';
import react from 'react';

type Props = {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const Campaign = (props: Props) => {
  const currencies = [
    {
      value: 'EUR',
      label: 'Afghanistan (+€10)',
    },
    {
      value: 'EUR',
      label: 'Australia (+€10)',
    },
    {
      value: 'EUR',
      label: 'Belize (+€10)',
    },
    {
      value: 'EUR',
      label: 'Belgium (+€8)',
    },
    {
      value: 'EUR',
      label: 'Czech Republic (+€8)',
    },
    {
      value: 'EUR',
      label: 'France (+€8)',
    },
    {
      value: 'EUR',
      label: 'Pakistan (+€10)',
    },
    {
      value: 'EUR',
      label: 'Réunion (+€10)',
    },
  ];
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid id="mainn1">
      <Box id="boxx"
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 95 }}
      >
        <Tabs id="tabbbss"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 2, borderColor: 'divider' }}
        >
          <Tab label="Story" />
          <Tab label="Risks" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid xs={12} sm={10} md={8} lg={6} id="mainboxx">
            <Box>
              Story
              <Grid xs={12} sm={10} md={8} lg={6} id="cardds901" >
                <Box id="imgg"
                  sx={{
                    width: 650
                  }}
                >
                  <Grid xs={12} sm={10} md={8} lg={6} id="patanhi">
                    <img src='https://ksr-ugc.imgix.net/assets/039/397/485/194f1481038a94ace6599d0116b30262_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1670271917&gif-q=50&q=92&s=4d81c4af01da52f497ad76cee3b00677' id="imggg" />

                    <Grid xs={12} sm={10} md={8} lg={6} id="ttasc">
                      <Grid xs={12} sm={10} md={8} lg={6} id="overflow">


                        <Container sx={{ border: 0.1 }} id="container678">
                          <Card >
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Phillip Arneill/James Catchpole
                              </Typography>
                              <Typography>
                                First created . 2 backed
                              </Typography>
                              <Typography id="phitext">
                                Phillip is a Belfast-born photographer and researcher currently based in Ireleand. In collaboration with his partner in jazz, American broadcaster James Catchpole, they have created the Tokyo Jazz Joints project , which has been exhibited worlwide.
                              </Typography>
                            </CardContent>

                          </Card>
                        </Container>

                        <Typography>
                          Support
                        </Typography>


                        <Container sx={{ border: 0.1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />

                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge without a reward
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography  id="euro">
                                  ABOUT US$ 11
                                </Typography>
                                <Box id="boxx122">
                                  Back it because you believe in it.
                                  <Typography id="t1">
                                    Support the project for no reward, just because it speaks to you.
                                  </Typography>
                                </Box>

                                <Button variant='contained' > Continue </Button>

                              </Box>

                            </CardContent>
                          </Card>
                        </Container>
                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ Width: 400 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge € 25 or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT $ 27
                                </Typography>

                                <Typography id="post">
                                  Postcards(4) & Tokyo Jazz Joints BeerMat
                                </Typography>

                                <Typography>
                                  Show your support without buying our book. If you are struggling where to put your drink when you are listening to jazz, look no further! Write your four postcards to friends and loved ones as you enjoy your drink and some cracking tunes in the comfort of your own home.
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . Tokyo Jazz Joints Postcards (4)
                                </Typography>

                                <Typography id="post"    >
                                  . Tokyo Jazz Joints Beer Mat
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      May 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>

                                <Stack direction='row' spacing={2}>

                                  <Box id='boxx8907'>

                                    <Typography id="back202">
                                      2 Backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (48 left of 50)
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>


                                <Typography>
                                  Pledge amount
                                </Typography>

                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />

                                <Typography id="euro">
                                  ABOUT $ 27
                                </Typography>

                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Container>

                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge €45 or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT US$ 48
                                </Typography>

                                <Typography id="post">
                                  TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Typography>
                                  The photobook is finally here! A hardback first edition with 168 pages and 120 colour photos from the project. Published by the renowned German publisher, Kehrer Verlag. The book dimensions are 24 x 20cm.
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      Jul 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>


                                <Stack direction='row' spacing={2}>
                                  <Box id='boxx8907'>
                                    <Typography id="back202">
                                      147 backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (153 left of 300)
                                    </Typography>
                                  </Box>
                                </Stack>

                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>
                                <Typography>
                                  Pledge amount
                                </Typography>
                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography id="euro">
                                  ABOUT US$ 80
                                </Typography>
                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Container>




                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge €60   or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT US$ 64
                                </Typography>

                                <Typography id="post">
                                  Signed & Stamped TJJ Photobook
                                </Typography>

                                <Typography>
                                  Get a signed and stamped (with TJJ Japanese hanko) copy of TOKYO JAZZ JOINTS.
                                  <Typography id="t1">
                                    The book is a hardback first edition with 168 pages and 120 colour photos from the project.
                                    Published by the renowned German publisher, Kehrer Verlag. The book dimensions are 24 x 20cm.
                                  </Typography>
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . Signed & Stamped TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      Jul 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>


                                <Stack direction='row' spacing={2}>
                                  <Box id='boxx8907'>
                                    <Typography id="back202">
                                      26 backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (74 left of 100)
                                    </Typography>
                                  </Box>

                                </Stack>
                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>
                                <Typography>
                                  Pledge amount
                                </Typography>
                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography id="euro">
                                  ABOUT US$ 85
                                </Typography>
                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Container>

                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge €75 or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT US$ 80
                                </Typography>

                                <Typography id="post">
                                  Signed, Stamped & Numbered TJJ Photobook
                                </Typography>

                                <Typography>
                                  Get a signed, stamped (with TJJ Japanese hanko) and numbered (136-235) first edition of TOKYO JAZZ JOINTS.
                                  <Typography id="t1">
                                    The book is a hardback first edition with 168 pages and 120 colour photos from the project. Published by the renowned German publisher, Kehrer Verlag. The book dimensions are 24 x 20cm.
                                  </Typography>
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . Signed, Stamped & Numbered TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      Jul 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>


                                <Stack direction='row' spacing={2}>
                                  <Box id='boxx8907'>
                                    <Typography id="back202">
                                      24 backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (76 left of 100)
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>
                                <Typography>
                                  Pledge amount
                                </Typography>
                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography id="euro">
                                  ABOUT US$ 101
                                </Typography>
                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Container>

                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge €125 or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT US$ 134
                                </Typography>

                                <Typography id="post">
                                  Photographic Print & TJJ Book
                                </Typography>

                                <Typography>
                                  Get a photographic print from the project, and a signed, stamped (with TJJ Japanese hanko) and numbered (61-135) first edition of TOKYO JAZZ JOINTS.
                                  <Typography id="t1">
                                    The book is a hardback first edition with 168 pages and 120 colour photos from the project.
                                    Published by the renowned German publisher, Kehrer Verlag. The book dimensions are 24 x 20cm.
                                  </Typography>
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . Numbered, Signed Photo Print (8 x 10, museum grade bamboo paper)
                                </Typography>

                                <Typography id="post">
                                  . Signed, Stamped & Numbered TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      Jul 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>


                                <Stack direction='row' spacing={2}>
                                  <Box id='boxx8907'>
                                    <Typography id="back202">
                                      23 backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (52 left of 75)
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>
                                <Typography>
                                  Pledge amount
                                </Typography>
                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography id="euro">
                                  ABOUT US$ 154
                                </Typography>
                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Container>






                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge €250 or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT US$ 267
                                </Typography>

                                <Typography id="post">
                                  Your name printed in TOKYO JAZZ JOINTS
                                </Typography>

                                <Typography>
                                  Get your name printed in the book as a thank you in a signed, stamped (with TJJ Japanese hanko) and numbered (21-60) first edition AND a limited edition photographic print.
                                  <Typography id="t1">
                                    TOKYO JAZZ JOINTS is a hardback first edition with 168 pages and 120 colour photos from the project.
                                    Published by the renowned German publisher, Kehrer Verlag. The book dimensions are 24 x 20cm.
                                  </Typography>
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . Your name printed as a thank you in TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Typography id="post">
                                  . Numbered, Signed Photo Print (8 x 10, museum grade bamboo paper)
                                </Typography>

                                <Typography id="post">
                                  . Signed, Stamped & Numbered TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      Jul 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>


                                <Stack direction='row' spacing={2}>
                                  <Box id='boxx8907'>
                                    <Typography id="back202">
                                      8 backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (32 left of 40)
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>
                                <Typography>
                                  Pledge amount
                                </Typography>
                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography id="euro">
                                  ABOUT US$ 287


                                </Typography>
                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Container>






                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge €500 or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT $531
                                </Typography>

                                <Typography id="post">
                                  The True Tokyo Jazz Joints Experience!
                                </Typography>

                                <Typography>
                                  If and when you are ever in Tokyo, enjoy a tour of 3 of our favourite Tokyo Jazz Joints with your very own personal tour guide and translator, the one and only James Catchpole. This reward also includes a signed, stamped (with TJJ Japanese hanko), numbered (11-20) first edition of our photo book with your name printed in it as a thank you, AND a limited edition photographic print.
                                  <Typography id="t1">
                                    The book is a hardback first edition with 168 pages and 120 colour photos from the project.
                                    Published by the renowned German publisher, Kehrer Verlag. The book dimensions are 24 x 20cm.
                                  </Typography>
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . Tokyo Jazz Joints Guided Tour
                                </Typography>

                                <Typography id="post">
                                  . Your name printed as a thank you in TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Typography id="post">
                                  . Numbered, Signed Photo Print (8 x 10, museum grade bamboo paper)
                                </Typography>

                                <Typography id="post">
                                  . Signed, Stamped & Numbered TOKYO JAZZ JOINTS Photobook
                                </Typography>

                                <Typography id="post">
                                  . Tokyo Jazz Joints Beer Mat
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      Jul 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>


                                <Stack direction='row' spacing={2}>
                                  <Box id='boxx8907'>
                                    <Typography id="back202">
                                      5 backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (5 left of 10)
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>
                                <Typography>
                                  Pledge amount
                                </Typography>
                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography id="euro">
                                  ABOUT US$ 564
                                </Typography>
                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>

                        </Container>





                        <Container sx={{ border: 1 }} id="container678">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 10 }}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom component="div" id="phijatext">
                                Pledge €1,000 or more
                              </Typography>

                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >

                                <Typography id="euro">
                                  ABOUT $1,061
                                </Typography>

                                <Typography id="post">
                                  The Total TOKYO JAZZ JOINTS Package!
                                </Typography>

                                <Typography>
                                  As well as a signed, stamped (with TJJ Japanese hanko) and numbered (4-10) first edition of our photo book with your name printed in the book as a 'super contributor' thank you, this reward includes two (different) limited edition photographic prints, AND when you are ever in Tokyo, enjoy a tour of 3 of our favourite Tokyo Jazz Joints with your very own personal tour guide and translator, the one and only James Catchpole. This tier also includes postcards, a beer mat, one additional first edition copy of the book, a 'Jointsagram' tabloid booklet (pp. 16/colour/limited edition of 50) AND a rare exclusive 'Pithecanthropus Erectus' board book (6'x'6/pp. 24/colour) – there were only ever 15 of these made. Suuuuugoi!!
                                  <Typography id="t1">
                                    The book is a hardback first edition with 168 pages and 120 colour photos from the project.
                                    Published by the renowned German publisher, Kehrer Verlag. The book dimensions are 24 x 20cm.
                                  </Typography>
                                </Typography>

                                <Typography>
                                  INCLUDES:

                                </Typography>

                                <Typography id="post">
                                  . Tokyo Jazz Joints Guided Tour
                                </Typography>
                                <Typography id="post">
                                  . Your name printed as a thank you in TOKYO JAZZ JOINTS Photobook
                                </Typography>
                                <Typography id="post">
                                  . 2× Numbered, Signed Photo Print (8 x 10, museum grade bamboo paper)
                                </Typography>
                                <Typography id="post">
                                  . Signed, Stamped & Numbered TOKYO JAZZ JOINTS Photobook
                                </Typography>
                                <Typography id="post">
                                  . Exclusive Pithecanthropus Board Book (6"x6" pp.24 –only 15 made!)
                                </Typography>
                                <Typography id="post">
                                  . TOKYO JAZZ JOINTS 'Joinstagram' Tabloid Booklet (pp. 16 Ed of 50)
                                </Typography>
                                <Typography id="post">
                                  . Additional copy of TOKYO JAZZ JOINTS Photobook
                                </Typography>
                                <Typography id="post">
                                  . Tokyo Jazz Joints Postcards (4)
                                </Typography>
                                <Typography id="post">
                                  . Tokyo Jazz Joints Beer Mat
                                </Typography>

                                <Stack direction="row" >

                                  <Typography id="delivery">
                                    ESTIMATED DELIVERY
                                    <Typography id="date">
                                      Jul 2023
                                    </Typography>
                                  </Typography>

                                  <Typography id="shipp">
                                    Ships To
                                    <Typography id="place">
                                      Anywhere in the world
                                    </Typography>
                                  </Typography>
                                </Stack>


                                <Stack direction='row' spacing={2}>
                                  <Box id='boxx8907'>
                                    <Typography id="back202">
                                      2 backers
                                    </Typography>

                                  </Box>
                                  <Box id='boxx8906'>
                                    <Typography id="back202">
                                      Limited (5 left of 7)
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Typography>
                                  Shipping destination
                                </Typography>
                                <Grid xs={12} sm={10} md={8} lg={6}>
                                  <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>

                                      <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        defaultValue="EUR"
                                        SelectProps={{
                                          native: true,
                                        }}
                                        helperText="Please select your currency"
                                      >
                                        {currencies.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </TextField>
                                    </div>
                                  </Box>
                                </Grid>
                                <Typography>
                                  Pledge amount
                                </Typography>
                                <TextField


                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EuroIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  variant="outlined"
                                />
                                <Typography id="euro">
                                  ABOUT US$ 1,096
                                </Typography>
                                <Button variant='contained'> Continue </Button>
                                <Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Container>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Typography id="textt">
                    TOKYO JAZZ JOINTS, our photobook and a dream come true, will be published by Kehrer Verlag in Spring 2023! This will be a co-funded publication with Kehrer, so we are launching this campaign to help financially support the successful publication of what promises to be a very special book, and the first coffee table-style photobook in the world about Japanese jazz kissaten.
                  </Typography>



                  <Typography id="textt1">
                    What is TOKYO JAZZ JOINTS?
                  </Typography>



                  <Typography id="textt2">
                    <a href="http://www.tokyojazzjoints.com/">TOKYO JAZZ JOINTS</a> is a visual chronicle of a unique world.
                  </Typography>



                  <Typography id="textt3">
                    Japanese jazz bars and coffee shops are insular worlds where time ceases to exist, removed from the speed and chaos of the modern urban landscape. TOKYO JAZZ JOINTS is a visual chronicle of this unique culture that captures the transient beauty of these spaces. Established in 2015 to document Tokyo’s myriad jazz kissaten, the project has gradually expanded to cover the whole of Japan. These dedicated jazz listening spaces are slowly vanishing in the face of changing trends, ageing customers and gentrification.
                  </Typography>

                  <Typography id="textt4">
                    This book preserves these living museums photographically before they disappear forever.
                  </Typography>

                  <Typography id="textt5">
                    What will the book be like?
                  </Typography>

                  <Typography id="textt6">
                    Amazing! Published by renowned German photobook publisher <a href="Kehrer Verlag  ">Kehrer Verlag</a> , this co-funded project first edition book will be a 24 x 20 cm hardback with 168 pages, approximately 120 colour images and two essays about the project.
                  </Typography>

                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/397/604/3fcfb80df56187ba4a0ae0d09fba2862_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1670272773&gif-q=50&q=92&s=0672b41bd443924f8189dda18c3fbbf8' id="img11" />
                  </Grid>

                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/397/670/3510f7160701691760420aa62bd056e8_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1670273158&gif-q=50&q=92&s=d18d56189aa5cd6e417152ecc9789049' id="img11" />
                  </Grid>

                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/397/613/81b8d0a4db78c826161606ebc62df26e_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1670272811&gif-q=50&q=92&s=b422e2fac3ee535a0880d158aee0757a' id="img11" />
                  </Grid>

                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/414/775/ee9adc458f409b5879ed6a7c0c0d41ae_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1670446915&gif-q=50&q=92&s=a1b4e72ec711789700c0c0a6a3fc8475' id="img11" />
                  </Grid>

                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/414/778/045fd48acb211b7580f3cc3bc6ad9fc0_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1670446953&gif-q=50&q=92&s=e5ae3f9b157f22fe1dfa6c3142c04e61' id="img11" />
                  </Grid>

                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/414/804/1fcf82c7288022ac1c86bc6683cab560_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1670447109&gif-q=50&q=92&s=1cba5374f9469649078b0f8a662caf30' id="img11" />
                  </Grid>
                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/437/096/b210d791d635deb97ddf35853c440100_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1670708375&gif-q=50&lossless=true&s=96622d14f76c30b8617faff6f4aab71a' id="img11" />
                  </Grid>

                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/437/104/81c5359fcbdb63c89a715c7bde301af4_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1670708557&gif-q=50&lossless=true&s=ae5ffc72edf5c897a17413ae029c7a0b  ' id="img11" />
                  </Grid>


                  <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography id="beer">
                      Beer Mat
                    </Typography>
                  </Grid>

                  <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography id="whoo">
                      Who are we?
                    </Typography>
                  </Grid>



                  <Grid>
                    <img src='https://ksr-ugc.imgix.net/assets/039/397/501/4b6b834e713d87c0f2e74243665fcfda_original.JPG?ixlib=rb-4.0.2&w=680&fit=max&v=1670272082&gif-q=50&q=92&s=80d6425d2dac3ee7ee034a93d25b19b2' id="img12" />
                  </Grid>


                  <Grid>
                    <Typography id="aboutt">
                      We are Northern Irish photographer Philip Arneill (youthful one on left) and American broadcaster James Catchpole (jaded shadow on right), both long-term residents of Japan, collaborators, jazz kissaten partners and dear friends.

                    </Typography>

                    <Typography id="aboutt">
                      Tokyo Jazz Joints is our audiovisual documentary photography project, born on a chilly March night in Kamata in 2015, when we visited the amazing 'Pithecanthropus Erectus'. That started a journey that has since taken us to over 160 jazz kissaten together as part of the project. And we are not done yet!
                    </Typography>

                    <Typography id="aboutt">
                      To find out even more about the project you can visit <a href="http://www.tokyojazzjoints.com/"> www.tokyojazzjoints.com </a>

                      and to hear us squabble, listen to our <a href="https://www.tokyojazzjoints.com/podcast "> podcast series here. </a>

                    </Typography>

                    <Typography id="riskhead">
                      Risks and challenges
                    </Typography>

                    <Typography id="aboutt">
                      Having already invested countless hours, days and months researching, budgeting and visiting each of the 162 joints documented to date, entirely at our own expense, a lot of the hard research work is done. When we hit our target the design and printing process will begin and we truly value your support to help us get over the line!
                    </Typography>


                    <Typography id="aboutt">
                      This co-funded project means we are delighted to partner with renowned German publisher KEHRER VERLAG as part of their new Spring catalogue to bring you a full colour, 168 page, hard cover photobook, scheduled for release in June 2023. As with any printing project supply chain issues during production are always a possibility but we will of course communicate any unforeseen issues as soon as they arise.
                    </Typography>

                    <Typography id="link123">
                      <a href="https://www.kickstarter.com/help/hc/sections/115001107133">Learn about accountability on Kickstarter</a>

                    </Typography>

                    <Typography id="aboutt56">
                      Questions about this project?


                      <a href="https://www.kickstarter.com/projects/philiparneill/tokyo-jazz-joints/faqs">Check out the FAQ</a>
                    </Typography>

                    <Divider id="divide"></Divider>

                    <Button variant='outlined' id="button8765">Report this project to Kickstarter </Button>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </TabPanel >

        <Divider></Divider>

        <TabPanel value={value} index={1}>
          Risks
        </TabPanel>
      </Box >
    </Grid >
  )
}

export default Campaign