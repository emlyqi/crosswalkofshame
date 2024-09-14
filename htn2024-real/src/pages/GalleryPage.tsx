import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const GalleryPage = () => {
  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      bgcolor="#18251C"
      minHeight="100vh"
      minWidth="100vw"
    >
      <Grid
        container
        alignContent="center"
        alignItems="flex-start"
        justifyContent="space-evenly"
        style={{
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          width: "100vw",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <p style={{ color: "#F5F5E7", marginTop: "0rem" }}>gallery of</p>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GalleryPage;
