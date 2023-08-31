import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function MaterialUiAccordion() {
  return (
    <div>
      <Accordion className="accordian1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>OPD Patient Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Link id='sidebarLinks' to="/patient-entry-form">Patient Entry Form</Link><br/>
            <Link id='sidebarLinks' to="/patient-tests-form">Patient Tests Form</Link><br/>
            <Link id='sidebarLinks' to="/patient-information">Patient Information</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Indoor Patient Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently Working on it.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
