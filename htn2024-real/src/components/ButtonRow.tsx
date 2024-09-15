import { Button, ButtonGroup } from "@mui/material";

interface ButtonRowProps{
  handleClick(date: number): void
}

const ButtonRow = ({handleClick} : ButtonRowProps) => {
  // const [numCrossings, setNumCrossings] = useState("0");
  // const [numPhones, setNumPhones] = useState("0");
  // const [avgCrossingTime, setAvgCrossingTime] = useState("0");
  // const [longCrossingTime, setLongCrossingTime] = useState("0");
  // const [shortCrossingTime, setShortCrossingTime] = useState("0");

  // const handleChange = (event) => {
  //   setNumCrossings(event.target.value); 
  //   setNumPhones(event.target.value); 
  // }

  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={() => handleClick(Date.now() - 60 * 60 * 1000)}>this hour</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={() => handleClick(Date.now() - 24 * 60 * 60 * 1000)}>today</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={() => handleClick(Date.now() - 7 * 24 * 60 * 60 * 1000)}>this week</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={() => handleClick(Date.now() - 30 * 7 * 24 * 60 * 60 * 1000)}>this month</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={() => handleClick(Date.now() - 365 * 7 * 24 * 60 * 60 * 1000)}>this year</Button>
      <Button style={{textTransform:"none", color:"#F5F5E7", border:"none"}} onClick={() => handleClick(1)}>all time</Button>
    </ButtonGroup>
  )
}

export default ButtonRow