import { useState } from 'react';
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import ButtonRow from "../components/ButtonRow"
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import logo from "../assets/logo.png";

const StatisticsPage = () => {

  const stats = useQuery(api.crosser_data.list) || [];
  const camera_stats = useQuery(api.camera_data.data) || [];

  console.log(stats);
  console.log(camera_stats);

  const [date, setDate] = useState<number>(0);

  function handleClick(date: number){
    setDate(date);
  }

  function sum(numbers: number[]): number{
    return numbers.reduce((acc, current) => acc + current, 0);
  }

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
      <img src={logo} alt="logo" style={{position:"absolute", scale:"40%", top:"5%", right:0}}/>
      <Box 
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <p style={{ color: "#F5F5E7", marginTop: "0rem", fontSize:"2rem" }}>statistics</p>
      </Box>
      <ButtonRow handleClick={handleClick}/>
      <Box 
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        marginTop="1rem"
      >
        {date !== 0 && (
          <p style={{justifyContent: "center"}}>There have been {stats.filter(stat => stat._creationTime > date).length} crossings.</p>
        )}
        {date !== 0 && (
          <p style={{justifyContent: "center"}}>There have been {camera_stats.filter(stat => stat._creationTime > date).length} instances of dangerous phone use.</p>
        )}
        {date !== 0 && stats.filter(stat => stat._creationTime > date).length > 0 && (
          <p style={{justifyContent: "center"}}>The percentage of dangerous crossings is: {(camera_stats.filter(stat => stat._creationTime > date).length*100/(stats.filter(stat => stat._creationTime > date).length)).toFixed(2)}%</p>
        )}
        {date !== 0 && stats.filter(stat => stat._creationTime > date).length > 0 && (
          <p style={{justifyContent: "center"}}>The average crossing speed has been: {(sum(stats.filter(stat => stat._creationTime > date).map((stat) => stat.cross_duration))/(stats.filter(stat => stat._creationTime > date).length)).toFixed(2)} seconds per crossing.</p>
        )}
  
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