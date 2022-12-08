import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../Header/Header';
import { Grid } from '@mui/material';  
import "../CreatProjectTabs/Tabs/CreateProjectTabs.css"
import Funding from './Tabs/Funding/Funding';
import Story from './Tabs/Story/Story';
import MyTeam from './Tabs/MyTeam/MyTeam';
import PaymentMethod from './Tabs/PaymentMethod/PaymentMethod';


const CreatProjectTabs = ()=>{
    const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>

    <Header/>
    <Grid>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Grid >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" id="tab1">
            <Tab label="Basics" value="1" />
            <Tab label="Funding" value="2" />
            <Tab label="Story" value="3" />
            <Tab label="My Team" value="4" />
            <Tab label="Payment Method" value="5" />
           
          </TabList>
        </Box>
        <TabPanel value="1">Basics</TabPanel>
        <TabPanel value="2"><Funding/></TabPanel>
        <TabPanel value="3"><Story/></TabPanel>
        <TabPanel value="4"><MyTeam/></TabPanel>
        <TabPanel value="5"><PaymentMethod/></TabPanel>
        </Grid>
      </TabContext>
    </Box>
    </Grid>
    </>
  );
}
export default CreatProjectTabs;