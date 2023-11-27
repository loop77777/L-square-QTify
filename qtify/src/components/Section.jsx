import { Box, Button, Typography } from "@mui/material";
import AlbumCard from "./AlbumCard";
import { useState } from "react";
import MySwiper from "./Swiper";

const Section = ({ title, data, enableAutoplay, isAlbum }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box m={2}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5" mx={2} color={"white"}>
          {title}
        </Typography>
        <Button
          variant="h6"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          mx={2}
          color={"white"}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "See All" : "Collapse"}
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"0.5rem"}
      >
        {isCollapsed ? (
          <Box sx={{ width: "100%" }}>
            <MySwiper slides={data} enableAutoplay={enableAutoplay} isAlbum={isAlbum} />
          </Box>
        ) : (
          data.map((item) => (
            <AlbumCard
              key={item.id}
              img={item.image}
              follows={item.follows || item.likes}
              title={item.title}
              songs={item.songs.length}
              isAlbum={isAlbum}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Section;
