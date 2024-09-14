import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Item } from "@radix-ui/react-toggle-group";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      bgcolor="#18251C"
      minHeight="100vh"
      position="relative"
    >
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        style={{
          padding: "5rem",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="80%"
          maxWidth="540rem"
        >
          <Box paddingBottom="5rem">
            <p
              style={{ color: "#F5F5E7", marginTop: "0rem", fontSize: "3rem" }}
            >
              crosswalk of
            </p>
            <p
              style={{
                color: "#FF4000",
                marginTop: "0rem",
                fontSize: "6rem",
                fontWeight: "bold",
                fontStyle: "italic",
                lineHeight: "0.2",
              }}
            >
              shame...
            </p>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            paddingBottom="2rem"
          >
            <Gallery />
          </Box>
        </Box>
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
            <a href="/statistics" style={{ textDecoration: "underline" }}>
              see stats
            </a>{" "}
            for unsafe crossing activities
          </p>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GalleryPage;
