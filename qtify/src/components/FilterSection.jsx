import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MySwiper from "./Swiper";

const FilterSection = ({
  title,
  data,
  genres,
  executeFilter,
  enableAutoplay,
  isAlbum,
}) => {
  const [selectedGenre, setSelectedGenre] = useState(0);

  return (
    <Box m={2}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h5" mx={2} color={"white"}>
          {title}
        </Typography>
      </Box>
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => {
          executeFilter(genres[newValue].key);
          setSelectedGenre(newValue);
        }}
        textColor="inherit"
        indicatorColor="primary"
        aria-label="filter tabs"
      >
        {genres.map((item) => (
          <Tab
            sx={{ fontWeight: "bold", color: "white" }}
            key={item.key}
            label={item.label}
          />
        ))}
      </Tabs>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"0.5rem"}
      >
        <Box sx={{ width: "100%" }}>
          <MySwiper
            slides={data}
            enableAutoplay={enableAutoplay}
            isAlbum={isAlbum}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSection;
