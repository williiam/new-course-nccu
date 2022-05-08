import { Box, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isLoggedIn, googleProfile } from "../../../store/selectors/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthModal from "../../AuthDialog/Main"

const AccountBox = styled(Box)(({ theme }) => ({
  padding: "10px",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25);",
  backgroundColor: theme.palette.background,
  cursor: "pointer"
}));

const AccountIcon = styled(AccountCircleIcon)(({ theme }) => ({
  height: "100%",
  width: "100%",
  color: theme.palette.grey["400"]
}));


function Account() {
  const [open, setOpen] = useState(false);
  const loggedIn = useSelector(state => isLoggedIn(state));
  const avatar = useSelector(state => googleProfile(state)).picture;

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box>
      {
        loggedIn ?
          <Avatar alt="Remy Sharp" src={avatar} onClick={handleOpen} sx={{cursor: "pointer", width: "50px", height: "50px"}} />
          :
          <AccountBox onClick={handleOpen}>
            <AccountIcon />
          </AccountBox>
      }
      <AuthModal open={open} handleClose={handleClose} />
    </Box>
  )
}

export default Account;