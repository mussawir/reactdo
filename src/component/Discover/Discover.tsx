import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import "../Discover/DiscoverStyle.css";
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#FBFBFA",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "1px solid none",
  background: "#fff",
}));

const  Discover = ()  =>{


    const [project, SetProject] = React.useState<[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/project")
      .then((res) => {
        console.log(res, "Get Data");
        SetProject(res?.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <>


{project.map((item: any) => (
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="ColHeading">
          <Link to="/discoverprojects" >{item?.subTitle} </Link> 
          </Typography>
        </AccordionDetails>
      </Accordion>

))}

    </>
  );
}


export default Discover;