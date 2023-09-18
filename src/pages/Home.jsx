import { Box } from "@mui/material";
import ImageGenerator from "../components/home/ImageGenerator";
import styled from "styled-components";
import CardList from "../components/home/CardList";

const Home = () => {
  return (
    <HomeContainer>
      <Box>
        <CardList />
        <ImageGenerator />
      </Box>
    </HomeContainer>
  );
};

const HomeContainer = styled(Box)`
  height: 100vh;

  > div:first-of-type {
    display: flex;
    margin: auto;
    max-width: 100%;
    padding: 50px;
    gap: 30px;
  }
`;

export default Home;
