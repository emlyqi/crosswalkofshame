import React from 'react';
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import ButtonRow from "../components/ButtonRow"
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

const StatisticsPage = () => {

  const stats = useQuery(api.crosser_data.list) || [];
  const camera_stats = useQuery(api.camera_data.data) || [];

  console.log(stats);
  console.log(camera_stats);

  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgcolor="#18251C"
      minHeight="100vh"
      position="relative"
    >
      <Box 
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <p style={{ color: "#F5F5E7", marginTop: "0rem", fontSize:"2rem" }}>statistics</p>
      </Box>
      <ButtonRow />
      <Box
          position="absolute"
          bottom="0"
          padding="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <p style={{ color: "#F5F5E7", marginTop: "0rem" }}>
            <a href="/" style={{ textDecoration: "underline", color:"#FF541B" }}>
              go back
            </a>{" "}
            to the crosswalk of shame
          </p>
        </Box>
    </Grid>
  )
}

export default StatisticsPage