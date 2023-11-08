import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B", // green
    },
    background: {
      default: "#121212", // black
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#121212",
          backgroundColor: "#34C94B",
          "&:hover": {
            backgroundColor: "#28a745", // darker green
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
