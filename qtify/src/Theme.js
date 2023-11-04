import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B",
    },
    background: {
      default: "#121212",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#121212",
          backgroundColor: "#34C94B",
          "&:hover": {
            backgroundColor: "#28a745",
          },
        },
      },
    },
  },
});
