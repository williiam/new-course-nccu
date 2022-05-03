import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

const SearchBarBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    margin: "0px 10px",
    height: "70%",
    borderRadius: "50px",
    boxShadow: "inset 2px 2px 8px rgba(0, 0, 0, 0.25)"
}));

const SearchBarInput = styled("input")(({ theme }) => ({
    height: "100%",
    width: "95%",
    margin: "0px 2.5%",
    border: "none",
    backgroundColor: "transparent",
    outlineWidth: 0,
}));

function SearchBar() {
    return (
        <SearchBarBox>
            <SearchBarInput />
        </SearchBarBox>
    )
}

export default SearchBar;