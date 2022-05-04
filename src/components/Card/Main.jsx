import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Star from "../../assets/star.svg"

const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(2),
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(3),
  height: "100%"
}));

function Card({ name, teacher, unit, rate, ratePopulation }) {
  return (
    <CardBox>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>{name}</Typography>
        <Typography>{teacher} / {unit}</Typography>
      </Box>
      <br></br>
      <Box sx={{display: "flex", alignItems: "center"}}>
        <img src={Star} style={{height: "1rem"}} />
        <span>{rate.toFixed(1)} ({ratePopulation}人)</span>
        
      </Box>
    </CardBox>
  )
}

export default Card;