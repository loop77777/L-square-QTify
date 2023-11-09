import { Box, Typography } from "@mui/material";
import AlbumCard from "./AlbumCard";

const Section = ({ title, data }) => {

  return (
    <Box m={2}>
      <Typography variant="h5" mx={2} color={"white"}>
        {title}
      </Typography>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"0.5rem"}
      >
        {data.map((item) => (
          <AlbumCard
            key={item.id}
            img={item.image}
            follows={item.follows}
            title={item.title}
          />
        ))}
        {/* <AlbumCard  />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard /> */}
      </Box>
    </Box>
  );
};

export default Section;
