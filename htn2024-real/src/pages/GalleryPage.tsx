import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Gallery from "../components/Gallery";
// import car from "../assets/car.png";
import greenPerson from "../assets/greenPerson.png";
import orangePerson from "../assets/orangePerson.png";
import logo from "../assets/logo.png";

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
      <img src={logo} alt="logo" style={{position:"absolute", scale:"40%", top:"5%", right:0}}/>
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
          width="100%"
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
            position="relative"
            display="flex"
            justifyContent="space-between"
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
            <a href="/statistics" style={{ textDecoration: "underline", color:"#FF541B" }}>
              see stats
            </a>{" "}
            for recent crossing activities
          </p>
        </Box>
      </Grid>
      {/* <img src={car} alt="car clipart" style={{position:"absolute", scale:"10%"}}/>  */}
      <img src={greenPerson} alt="green person clipart" style={{position:"absolute", scale:"30%", left:"10%", top:"15%"}}/> 
      <img src={greenPerson} alt="green person clipart" style={{position:"absolute", scale:"30%", left:"55%", top:"5%"}}/> 
      <img src={greenPerson} alt="green person clipart" style={{position:"absolute", scale:"30%", left:"72%", top:"30%"}}/> 
      <img src={orangePerson} alt="orange person clipart" style={{position:"absolute", scale:"20%", left:"10%", top:"20%"}}/>
    </Grid>
  );
};

export default GalleryPage;
