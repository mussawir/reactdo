import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material'
import '../TabsDiscovers/TabDiscoverStyle.css';
import Campaign from "../TabsDiscovers/TabsCampaign/Campaign";

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
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsDicover = (props: Props) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
  return (
    <Grid xs={12} sm={10} md={8} lg={6}>
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> 
<Grid xs={12} sm={10} md={8} lg={6} >


        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" id="tabs">
          <Tab label="Campaign" />
          <Tab label="FAQ" />
          <Tab label="Updates" />
          <Tab label="Comments"/>
          <Tab label="Community" />
          
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      
     
    </Box>
    <Button variant="contained" id="buttonn" >Back this project</Button>
    <Button variant="outlined" id="buttonn1" >Remind</Button>
        </Tabs>
        </Grid>



        
      </Box>
      
      <TabPanel value={value} index={0}>
      <Campaign/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      FAQ
      </TabPanel>
      <TabPanel value={value} index={2}>
      Updates
      </TabPanel>
      <TabPanel value={value} index={3}>
      Comments
      </TabPanel>
      <TabPanel value={value} index={4}>
      Community
      </TabPanel>
     

    </Box>
    </Grid>
  )
}

export default TabsDicover;