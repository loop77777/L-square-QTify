import { Box, ClickAwayListener, Popper } from "@mui/material";
import React from "react";

const MenuItems = ({ i }) => {
  return (
    <Box
      key={i}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "0.5rem",
        borderBottom: "1px solid black",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          //   src="https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={i.image}
          alt="album"
          width="50px"
          height="50px"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            ml: "0.5rem",
            flex: 1,
          }}
        >
          <Box
            sx={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {/* Album Name */}
            {i.title}
          </Box>
          <Box
            sx={{
              fontSize: "0.5rem",
              color: "white",
            }}
          >
            {/* Artist Name with comma separated */}
            {i.description}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: "0.8rem",
          textAlign: "end",
          textWrap: "nowrap",
          color: "white",
        }}
      >
        {i.follows} Follows
      </Box>
    </Box>
  );
};
const MenuPopper = ({ anchorEl, setAnchorEl, data }) => {
  console.log(data);
  const open = Boolean(anchorEl);
  //   const id = open ? "search-popper" : undefined;
  return (
    <Popper id="search-popper" open={open} anchorEl={anchorEl}>
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <Box
          sx={{
            // position: "absolute",
            width: "80%",
            minWidth: "20rem",
            maxHeight: "50vh",
            overflowY: "scroll",
            bgcolor: "black",
            borderRadius: "0 0 0.5rem 0.5rem",
            // top:'3rem'
            // scrollbar
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
              outline: "1px solid slategrey",
              borderRadius: "0.5rem",
            },
          }}
          mt="1rem"
        >
          {
            data.map((i) => (
              <MenuItems i={i} />
            ))
            // ["Album 1", "Album 2", "Album 3", "Album 4", "Album 5"
          }
        </Box>
      </ClickAwayListener>
    </Popper>
  );
};

export default MenuPopper;
