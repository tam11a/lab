import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9fe9fd",
      main: "#5fdafb",
      dark: "#398397",
      contrastText: "#1c2330",
    },
    secondary: {
      light: "#fff",
      main: "#ccc",
      dark: "#aaa",
      contrastText: "#1c2330",
    },
    background: {
      default: "#1c2330",
      paper: "#202736",
    },
    error: {
      light: '#ed816c',
      main: '#e86147',
      dark: '#a24432',
      contrastText: '#1c2330'
    },
    success: {
      light: '#82ff82',
      main: '#4dff4d',
      dark: '#36b336',
      contrastText: '#1c2330'
    }
  },

  typography: {

    fontFamily: "Alegreya Sans SC, sans-serif",
    allVariants: {
      color: '#ccc'
    }, 
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
          textTransform: "unset",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
        },
      },
    }
  },
});

export default theme;