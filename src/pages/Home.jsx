import { Box, Typography, IconButton, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from "../components/NavBar/Main";
import TypeButtonToggler from "../components/TypeButtonToggler";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
  width: "95%",
  fontSize: "1.2rem",
  margin: "0px 2.5%",
  border: "none",
  backgroundColor: "transparent",
  outlineWidth: 0,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0) + " " + theme.spacing(1),
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25)",
  backgroundColor: theme.palette.background.default
}));

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("name");
  const [semester, setSemester] = useState("1102")

  useEffect(() => {
    dispatch({type: "course.search.set", search: search});
    dispatch({type: "course.type.set", type: type});
    dispatch({type: "course.semester.set", semester: semester});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: '/search',
      search: '?search=' + search + '&type=' + type + '&semester=1102',
    });
  }

  return (
    <HomeBox>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <SearchBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md>
              <Typography sx={{ fontWeight: "bold", fontSize: "2.5rem" }} color="primary">政大課程評價網</Typography>
            </Grid>
            <Grid item xs={12} md sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <TypeButtonToggler type={type} setType={setType} />
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", height: "80px" }}>
            <SearchBarBox>
              <SearchBarInput value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="開課系所、課程名稱、老師..."/>
            </SearchBarBox>
            <StyledIconButton color="primary" size="large" type="submit">
              <SearchIcon fontSize="large" />
            </StyledIconButton>
          </form>
        </SearchBox>
      </Box>
    </HomeBox>
  )

}

export default Home;