import { React, useState } from 'react';
import Grid from "@mui/material/Grid2";
import { Button, ButtonGroup } from "@mui/material";

const ButtonRow = () => {
  const [numCrossings, setNumCrossings] = useState("0");
  const [numPhones, setNumPhones] = useState("0");
  const [avgCrossingTime, setAvgCrossingTime] = useState("0");
  const [longCrossingTime, setLongCrossingTime] = useState("0");
  const [shortCrossingTime, setShortCrossingTime] = useState("0");

  // const handleChange = (event) => {
  //   setNumCrossings(event.target.value); 
  //   setNumPhones(event.target.value); 
  // }

  return (
    // <ButtonGroup variant="text" aria-label="Basic button group">
    //   <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={handleChange}>today</Button>
    //   <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={handleChange}>this week</Button>
    //   <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={handleChange}>this month</Button>
    //   <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={handleChange}>this year</Button>
    //   <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={handleChange}>all time</Button>
    // </ButtonGroup>
  )
}

export default ButtonRow