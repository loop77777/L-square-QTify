import { Box, Button } from "@mui/material";
import React from "react";
import SearchBox from "./SearchBox";

const Header = ({albums}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      bgcolor={"primary.main"}
      px="1rem"
    >
      <img src="Qtify-icon.svg" alt="QTify" width="100px" height="100px" />
      <SearchBox albums={albums}  />
      <Box>
        <Button
          sx={{
            color: "green",
            fontWeight: "bold",
            bgcolor: "black",
            p: "0.5rem 0.7rem",
            borderRadius: "0.5rem",
            ":hover": {
              bgcolor: "green",
              color: "black",
            },
          }}
        >
          Give Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
