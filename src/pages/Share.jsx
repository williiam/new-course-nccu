import { Box, Typography, IconButton, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import NavBar from "../components/NavBar/Main";
import TypeButtonToggler from "../components/TypeButtonToggler";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthModal from "../components/AuthDialog/Main";

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

const SearchBarBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  margin: theme.spacing(0) + " " + theme.spacing(1),
  height: "70%",
  borderRadius: "50px",
  boxShadow: "inset 2px 2px 8px rgba(0, 0, 0, 0.25)",
  display: "flex",
  alignItems: "center"
}));

const SearchBarInput = styled("input")(({ theme }) => ({
  height: "100%",
  width: "calc(100% - 20px)",
  margin: "0px 20px",
  fontSize: "1.2rem",
  border: "none",
  backgroundColor: "transparent",
  outlineWidth: 0,
  fontWeight: "bold",
  fontFamily: "Noto Sans TC"
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0) + " " + theme.spacing(1),
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25)",
  backgroundColor: theme.palette.background.default
}));

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const open = useSelector(state => state.auth.dialogOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: '/search',
      search: '?search=' + search,
    });
  }

  return (
    <HomeBox>
      <Box sx={{ flexGrow: 1 }}>
        <SearchBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md>
              <Typography sx={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }} color="#757575">點擊以下連結前往評價網</Typography>
              <Link href="https://course-nccu.com" variant="body2">
              <Typography sx={{ fontWeight: "bold", fontSize: "2.3rem", textAlign: "center" }} color="primary">https://course-nccu.com</Typography>
              </Link>
            </Grid>
          </Grid>
        </SearchBox>
      </Box>
      {/* <AuthModal open={open} handleClose={() => dispatch({type: "auth.dialog.close"})} /> */}
    </HomeBox>
  )

}

export default Home;