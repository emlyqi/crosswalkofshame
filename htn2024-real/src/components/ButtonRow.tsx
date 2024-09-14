import React from 'react';
import Grid from "@mui/material/Grid2";
import { Button, ButtonGroup } from "@mui/material";

const ButtonRow = () => {
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  )
}

export default ButtonRow