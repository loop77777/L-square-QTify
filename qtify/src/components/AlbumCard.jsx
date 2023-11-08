import { Box, Typography } from "@mui/material";
import React from "react";

const AlbumCard = () => {
  return (
    <Box m={2} width={"min-content"}>
      <Box bgcolor={"white"} sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "9rem",
            height: "10rem",
          }}
        >
          <img
            src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="album cover"
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          sx={{
            bgcolor: "background.default",
            color: "white",
            width: "fit-content",
            m: 1,
            px: 1,
            borderRadius: 1,
            fontSize: 12,
          }}
        >
          100 Follows
        </Box>
      </Box>
      <Typography fontSize={"0.87rem"} color={"white"}>
        New Bollywood
      </Typography>
    </Box>
  );
};

export default AlbumCard;
