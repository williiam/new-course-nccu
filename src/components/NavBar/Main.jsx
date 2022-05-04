import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import Icon from "./components/Icon";
import Account from "./components/Account";
import Nav from "./components/Nav";

const NavbarBox = styled(Box)(({ theme }) => ({
  padding: "20px",
}));

function Navbar() {
  const location = useLocation();
  return (
    <NavbarBox>
      <Box sx={{ display: "flex" }}>
        <Icon />
        {
          location.pathname == "/" ?
            <Box sx={{ flexGrow: 1 }} /> :
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, height: "100%" }}>
                <Nav />
              </Box>
              <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, height: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary">政大課程評價網</Typography>
                </Box>
              </Box>
            </Box>
        }
        <Account />
      </Box>
      <Box sx={{ display: { sm: 'block', md: 'none' }, height: "100%" , paddingTop: "5px"}}>
        <Nav hideTitle={true} />
      </Box>
    </NavbarBox>
  )
}

export default Navbar;