import { Box, Typography, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from "../components/NavBar/Main";
import SearchBar from "../components/NavBar/components/SearchBar";

const HomeBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column"
}));

const SearchBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "10%",
  width: "80%"
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: "0px 10px",
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25)",
  backgroundColor: theme.palette.background.default
}));

function Home() {
  return (
    <HomeBox>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <SearchBox>
          <Typography sx={{ fontWeight: "bold", fontSize: "2.5rem" }} color="primary">政大課程評價網</Typography>
          <Box sx={{ display: "flex", alignItems: "center", height: "80px" }}>
            <SearchBar />
            <StyledIconButton color="primary" size="large">
              <SearchIcon fontSize="large" />
            </StyledIconButton>
          </Box>

        </SearchBox>
      </Box>
    </HomeBox>
  )

}

export default Home;