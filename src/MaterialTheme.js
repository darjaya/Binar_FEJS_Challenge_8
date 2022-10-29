import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#4f83cc",
      main: "#01579b",
      dark: "#002f6c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#9fffe0",
      main: "#69f0ae",
      dark: "#2bbd7e",
      contrastText: "#000",
    },
    maroon: {
      light: "#ff7961",
      main: "#dc143c",
      dark: "#ba000d",
      contrastText: "#000",
    },
    orange: {
      light: "#ff7961",
      main: "#FFA500",
      dark: "#ba000d",
      contrastText: "#000",
    },
    green: {
      light: "#ff7961",
      main: "#2E8B57",
      dark: "#ba000d",
      contrastText: "#000",
    },
    white: {
      light: "#ff7961",
      main: "	#F0FFFF",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

export default Theme;
