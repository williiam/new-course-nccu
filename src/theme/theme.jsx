import { LightColor } from "./color";
import { createTheme } from '@mui/material/styles';

const palette= {
  primary: {
    main: LightColor.primary,
    text: LightColor.light,
  },
  secondary: {
    main: LightColor.secondary,
    text: LightColor.light,
  },
  background: {
    default: LightColor.background
  },
  grey: {
    50:"#F0F0F0",
    400: "#B9B9B9"
  },
};

export default createTheme({
  palette: palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 750,
      lg: 1000,
      xl: 1200,
    },
  },
});