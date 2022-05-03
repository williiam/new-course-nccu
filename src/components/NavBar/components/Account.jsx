import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AccountBox = styled(Box)(({ theme }) => ({
  padding: "10px",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  boxShadow: "-10px -11px 16px 1px rgba(252, 252, 252, 0.7), 9px 14px 24px -10px rgba(0, 0, 0, 0.25);",
  backgroundColor: theme.palette.background
}));

const AccountIcon = styled(AccountCircleIcon)(({ theme }) => ({
    height: "100%",
    width: "100%",
    color: theme.palette.grey["400"]
  }));


function Account() {
  return (
    <AccountBox>
      <AccountIcon />
    </AccountBox>
  )
}

export default Account;