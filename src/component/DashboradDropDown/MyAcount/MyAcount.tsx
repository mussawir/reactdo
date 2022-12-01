import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import "../MyAcount/MyAccount.css";

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyAccount() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
  
    <>
    <Grid id="mainpageofmyaccounts">
      <Container>
      <Container>
    <Container id="containerofmyaccounts">
    <Grid xs={12} sm={10} md={8} lg={6} >
    <Box sx={{ width: '100%', float:'right' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  id="tabsofmyaccount">
          <Tab label="Activity" {...a11yProps(0)} />
          <Tab label="Backed projects" {...a11yProps(1)} />
          <Tab label="Created projects" {...a11yProps(2)} />
          <Tab label="Settings" {...a11yProps(3)} />
          <Tab label="Profile" {...a11yProps(4)} />
        </Tabs>
      </Box>
    </Box>
    </Grid>
    <Grid xs={12} sm={10} md={8} lg={6}>
      <Typography id="heading1ofmyaccount">Created projects</Typography>
      <Typography id="heading2ofmyaccounts">A place to keep track of all your created projects</Typography>
      <Typography id="heading3ofmyaccounts">Started</Typography>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
        <Grid id="maincard" >
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        <Typography id="cardbutton" variant="body2" color="text.secondary">
          Project
          <Button id="whole" variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
      </Grid>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        <Typography id="cardbutton" variant="body2" color="text.secondary">
         Project
          <Button id="whole" variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
      </Grid>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        <Typography id="cardbutton" variant="body2" color="text.secondary">
          Project
          <Button id="whole"variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
      </Grid>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        <Typography id="cardbutton" variant="body2" color="text.secondary">
        Project
          <Button id="whole"variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
      </Grid>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        <Typography id="cardbutton" variant="body2" color="text.secondary">
         Project
          <Button id="whole"variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
      </Grid>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        <Typography id="cardbutton" variant="body2" color="text.secondary">
          Project
          <Button id="whole"variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
      </Grid>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        <Typography id="cardbutton" variant="body2" color="text.secondary">
         Project
          <Button id="whole"variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
      </Grid>
      <Grid xs={12} sm={10} md={8} lg={6} id="card">
      <Card sx={{  maxHeight: 545 }} id="cardofmyaccounts">
      <CardMedia/>
      <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' id="img1"></img>
      <CardContent >
        
        <Typography id="cardbutton" variant="body2" color="text.secondary">
          Project
          <link rel="stylesheet" href="https://web.whatsapp.com/" />
          <Button id="whole" variant='contained'>Continue editing</Button>
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
      </Grid>
    </Grid>
    </Container>
    </Container>
    </Container>
    </Grid>
    </>
    
    
  );
}