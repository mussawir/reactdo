import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import "../Discover/DiscoverStyle.css"
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : '#FBFBFA',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: '1px solid none',
  background:"#fff"
}));

export default function Discover() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography id="ColHeading">Collections</Typography>
        </AccordionSummary>
        <AccordionDetails id="AccordionDetails">
          <Grid> <Link to=""  id="collectoinText">Projects We Love</Link> </Grid>
          <Grid>  <Link to="" id="collectoinText">Trending</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Nearly Funded</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Just Launched</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText"> Upcoming Projects</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText"> Projects Near You</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Everything</Link> </Grid>   





        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography id="ColHeading">Sections</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <AccordionDetails id="AccordionDetails">
        <Grid> <Link to=""  id="collectoinText">Arts</Link> </Grid>
          <Grid>  <Link to="" id="collectoinText">Comics & Illustration</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Design & Tech</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Film</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Food & Craft</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText"> Games</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Music</Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Publishing</Link> </Grid>   
        </AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography id="ColHeading">Categories</Typography>
        </AccordionSummary>
        <AccordionDetails id="AccordionDetails">
        <Grid> <Link to=""  id="collectoinText">Arts <span id="smallText">11</span></Link> </Grid>
          <Grid><Link to="" id="collectoinText">Comics <span id="smallText">269</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Crafts   <span id="smallText">60</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Dance <span id="smallText">9</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Design <span id="smallText">317</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText"> Fashion <span id="smallText">174</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Film & Video <span id="smallText">282</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Food<span id="smallText">112</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Games<span id="smallText">718</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Journalism<span id="smallText">12</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Music<span id="smallText">146</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Photography <span id="smallText">43 </span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Publishing <span id="smallText"> 379</span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText"> Technology<span id="smallText">267 </span></Link> </Grid>   
          <Grid> <Link to="" id="collectoinText">Theater <span id="smallText">21 </span></Link> </Grid>   
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography id="ColHeading">On Our Radar</Typography>
        </AccordionSummary>
        <AccordionDetails id="AccordionDetails">
        <Grid> <Link to=""  id="collectoinText">RPGs </Link> </Grid>
        <Grid> <Link to=""  id="collectoinText">Sci-Fi and Fantasy</Link> </Grid>
        <Grid> <Link to=""  id="collectoinText">STEM</Link> </Grid>
        <Grid> <Link to=""  id="collectoinText">Zine Quest</Link> </Grid>
        
        </AccordionDetails>
      </Accordion>
    </div>
  );
}