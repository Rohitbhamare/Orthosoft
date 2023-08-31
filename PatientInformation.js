import * as React from 'react';
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import {DummyPatientInfo} from "./DummyPatientInfo" 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './patientinfo.css';

const StyledTableCell = styled(TableCell)(({  }) => ({
  fontSize: '14px',
  
}));

const StyledTableRow = styled(TableRow)(({  }) => ({

}));

const PatientInformation = () => {

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const patientData = JSON.parse(localStorage.getItem("patients"));
    if (patientData) {
      setPatientData(patientData);
    }
  }, []);
  return (
    <TableContainer component={Paper} sx={{ bgcolor: 'rgb(84, 79, 79)' }} className="Main-Table">
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead className='Main-Table-Table-Head'>
          <TableRow className='Main-Table-Table-Head-Row'>
          <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="left">NAME</StyledTableCell>
            <StyledTableCell align="left">MOBILE NO.</StyledTableCell>
            <StyledTableCell align="left">AADHAR NO.</StyledTableCell>
            <StyledTableCell align="left">AGE</StyledTableCell>
            <StyledTableCell align="left">GENDER</StyledTableCell>
            <StyledTableCell align="left">MLC</StyledTableCell>
            <StyledTableCell align="left">CITY</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className='Main-Table-Table-Body'>
          {patientData.map((row) => (
            <StyledTableRow key={row.id} className='Main-Table-Styled-Table-Row'>
              <StyledTableCell><Link to={`/patienttesttable/${row.id}`}>{row.id}</Link></StyledTableCell>
              <StyledTableCell align="left">{row.firstName}</StyledTableCell>
              <StyledTableCell align="left">{row.mobileNumber}</StyledTableCell>
              <StyledTableCell align="left">{row.aadharNumber}</StyledTableCell>
              <StyledTableCell align="left">{row.age}</StyledTableCell>
              <StyledTableCell align="left">{row.gender}</StyledTableCell>
              <StyledTableCell align="left">{row.isMLC}</StyledTableCell>
              <StyledTableCell align="left">{row.city}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PatientInformation;
