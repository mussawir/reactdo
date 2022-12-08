import * as React from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../Header/Header';
import { Grid } from '@mui/material';
import "../CreateProjectTabs/Tabs/CreateProjectTabs.css"
import Funding from './Tabs/Funding/Funding';
import Story from './Tabs/Story/Story';
import MyTeam from './Tabs/MyTeam/MyTeam';
import PaymentMethod from './Tabs/PaymentMethod/PaymentMethod';
import Basic from './Tabs/Basic/Basic';


const CreateProjectTabs = ()=>{
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
          <Grid xs={12} sm={10} md={8} lg={6}>
        <Box sx={{ borderBottom: 1,  borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" id="tab1">         
            <Tab icon={<BorderColorOutlinedIcon id="iicon1" />} aria-label="Basic" label="Basic" value="1"/>           
            <Tab icon={< EqualizerOutlinedIcon id="iicon1"/>}  label="Funding" value="2"/>          
            <Tab icon={< ImportContactsIcon id="iicon1"/>}  label="Story" value="3"/>           
            <Tab icon={<GroupsIcon id="iicon1"/>}  label="My Team" value="4"/>
            <Tab icon={< CampaignOutlinedIcon id="iicon1"/>}  label="Payment Method" value="5"/>
          </TabList>
        </Box>
        </Grid>
        <TabPanel value="1"><Basic/></TabPanel>
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
export default CreateProjectTabs;