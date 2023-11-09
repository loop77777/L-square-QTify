import { Box, Typography } from "@mui/material";
import React from "react";

const AlbumCard = ({ img, follows, title }) => {
  return (
    <Box m={2} width={"min-content"}>
      <Box
        bgcolor={"white"}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "0.625rem",
        }}
      >
        <Box
          sx={{
            width: "9rem",
            height: "10rem",
          }}
        >
          <img
            src={img}
            alt="album cover"
            width="100%"
            height="100%"
            style={{ borderRadius: "0.625rem 0.625rem 0 0" }}
          />
        </Box>
        <Box
          sx={{
            bgcolor: "background.default",
            color: "white",
            width: "fit-content",
            m: 1,
            p: "0.25rem 0.5rem",
            borderRadius: "0.625rem",
            fontSize: 12,
          }}
        >
          {follows} Follows
        </Box>
      </Box>
      <Typography fontSize={"0.87rem"} color={"white"}>
        {title}
      </Typography>
    </Box>
  );
};

export default AlbumCard;
