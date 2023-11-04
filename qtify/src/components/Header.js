import React from "react";
import { Button, TextField, Box } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      bgcolor={"green"}
      px="1rem"
    >
      <h1>QTify</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <TextField
          label="Search an album of your choice"
          aria-label="Search an album of your choice"
          sx={{ bgcolor: "white" }}
          color="primary"
        />
        <SearchOutlined />
      </Box>
      <Box>
        <Button
          sx={{
            color: "green",
            bgcolor: "black",
            p: "0.5rem",
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
