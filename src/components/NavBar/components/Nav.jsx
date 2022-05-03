import { Box, Typography, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import SemesterSelect from "./SemesterSelect"
import SearchBar from "./SearchBar";

const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25)",
  borderRadius: "35px",
  margin: "0px 30px",
  padding: "0px 30px",
  height: "100%"
}));


function Nav() {
  return (
    <NavBox>
      <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary">政大課程評價網</Typography>
      <SearchBar />
      <SemesterSelect />
      <IconButton color="primary">
        <SearchIcon />
      </IconButton>
    </NavBox>
  )
}

export default Nav;