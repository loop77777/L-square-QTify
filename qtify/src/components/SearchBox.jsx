import { Box, Icon, TextField, useMediaQuery } from "@mui/material";
import React from "react";

import SearchOutlined from "@mui/icons-material/SearchOutlined";
import MenuPopper from "./MenuPopper";

const SearchBox = ({ albums }) => {
  const matches = useMediaQuery("(max-width:900px)"); // 600px

  // search bar menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "0.5rem",
        bgcolor: "white",
        // position: "relative",
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
        onClick={handleClick}
      />
      <Icon sx={{ p: "0.5rem" }}>
        <SearchOutlined />
      </Icon>
      <MenuPopper anchorEl={anchorEl} setAnchorEl={setAnchorEl} data={albums} />
    </Box>
  );
};

export default SearchBox;
