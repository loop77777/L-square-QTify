import React from "react";
import { Button, TextField, Box, Icon } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

const Header = () => {
  const matches = useMediaQuery("(max-width:900px)"); // 600px
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "0.5rem",
          bgcolor: "white",
        }}
      >
        <TextField
          label="Search an album of your choice"
          aria-label="Search an album of your choice"
          sx={{
            borderRight: "1px solid black",
            width: matches ? "10rem" : "20rem",
          }}
          size="small"
        />
        <Icon sx={{ p: "0.5rem" }}>
          <SearchOutlined />
        </Icon>
      </Box>
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
