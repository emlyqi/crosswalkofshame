import React from 'react';
import Grid from "@mui/material/Grid2";
import { Button, ButtonGroup } from "@mui/material";

const ButtonRow = () => {
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}}>today</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}}>this week</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}}>this month</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}}>this year</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}}>all time</Button>
    </ButtonGroup>
  )
}

export default ButtonRow