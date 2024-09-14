import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const GalleryPage = () => {
  return (
    <Box width="100%" height="100%" display="flex" alignItems="flex-start">
      <Grid container spacing={2}>
        <Box
          bgcolor="#18251C"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
        >
          <p>HELLO THIS IS THE GALLERY PAGE!!</p>
        </Box>
      </Grid>
    </Box>
  );
};

export default GalleryPage;
