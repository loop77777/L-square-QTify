import { Box, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        color: "white",
        height: "50vh",
        // width: "100%",
        px: "1rem",
      }}
    >
      <Box sx={{fontWeight:"bold"}}>
        <Typography variant="h3">100 Thousand Songs, ad-free</Typography>
        <Typography variant="h3">Over thousands podcast episodes</Typography>
      </Box>
      <Box>
        <img
          src="Vibrating_headphone.svg"
          alt="headphones"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
