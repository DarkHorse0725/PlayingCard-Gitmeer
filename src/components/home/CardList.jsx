import { Box } from "@mui/material";
import CardBox from "./CardBox";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import PlayingCardListA from "./PlayingCardListA";
import PlayingCardListB from "./PlayingCardListB";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const CardList = () => {
  const [value, setValue] = useState("A");
  const [selectedButton, setSelectedButton] = useState("circle");

  //   init playing card value into -1 or localStorage value
  let tempList = [];
  for (let i = 0; i < 54; i++) {
    tempList[i] = "-1";
  }
  let checkData = localStorage.getItem("srcLists");
  if (!checkData) {
    localStorage.setItem("srcLists", JSON.stringify(tempList));
  } else {
    tempList = JSON.parse(checkData);
  }

  const [srcLists, setSrcLists] = useState(tempList);
  // Handle card template button
  const handleButtonClick = (event) => {
    setSelectedButton(event.target.value);
  };

  //   template button group
  const buttons = [
    <Button
      sx={{ fontSize: "30px", padding: "0px" }}
      value="circle"
      onClick={handleButtonClick}
    >
      &#x25CF;
    </Button>,
    <Button
      sx={{ fontSize: "30px", padding: "0px" }}
      value="square"
      onClick={handleButtonClick}
    >
      ■
    </Button>,
    <Button
      sx={{ fontSize: "30px", padding: "0px" }}
      value="rhombus"
      onClick={handleButtonClick}
    >
      ◇
    </Button>,
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const saveCards = () => {};
  //   reset card urls
  const clearCards = () => {
    for (let i = 0; i < 54; i++) {
      tempList[i] = "-1";
    }
    localStorage.setItem("srcLists", JSON.stringify(tempList));
    setSrcLists(tempList);
  };

  return (
    <Box
      flex={2}
      display={`flex`}
      justifyContent={`center`}
      alignItems={`center`}
      gap={`50px`}
    >
      <CardListContainer>
        <Box ml={`130px`}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="A" label="A" />
            <Tab value="B" label="B" />
          </Tabs>
        </Box>
        {value === "A" && (
          <Box>
            <PlayingCardListA
              type={selectedButton}
              srcLists={srcLists}
              setSrcLists={setSrcLists}
            />
          </Box>
        )}
        {value === "B" && (
          <Box>
            <PlayingCardListB
              type={selectedButton}
              srcLists={srcLists}
              setSrcLists={setSrcLists}
            />
          </Box>
        )}
        <Box position={`absolute`} top={`20px`} right={`-40px`}>
          <ButtonGroup orientation="vertical">{buttons}</ButtonGroup>
        </Box>
      </CardListContainer>
      <Box display={`flex`} flexDirection={`column`} gap={`20px`}>
        <Button
          variant="contained"
          sx={{ height: "40px", width: "100px" }}
          onClick={saveCards}
        >
          OK
        </Button>
        <Button
          variant="outlined"
          sx={{ height: "40px", width: "100px" }}
          onClick={clearCards}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

const CardListContainer = styled(Box)`
  padding: 50px 20px;
  border: 1px solid #000;
  border-radius: 20px;
  position: relative;
  min-width: 900px;
`;

export default CardList;
