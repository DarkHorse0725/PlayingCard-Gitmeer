/**
 * Playing Card list Component of A 
 * @param type : string => template type
 * @param srcLists: array => src lists array
 * @param setSrcLists: state function => state funtion to set src lists
 */

import { Box } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Card from "./Card";
import { CardData } from "../data/cardData";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const PlayingCardListA = ({ type, srcLists, setSrcLists }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          sx={{ fontSize: "28px", color: "pink", ":focus": { color: "red" } }}
          label="♥"
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            fontSize: "28px",
            color: "#718599",
            ":focus": { color: "black" },
          }}
          label="♠️"
          {...a11yProps(1)}
        />
        <Tab
          sx={{
            fontSize: "28px",
            color: "#718599",
            ":focus": { color: "black" },
          }}
          label="♣"
          {...a11yProps(2)}
        />
        <Tab
          sx={{ fontSize: "28px", color: "pink", ":focus": { color: "red" } }}
          label="♦️"
          {...a11yProps(3)}
        />
        <Tab label="Joker" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box display={"grid"} gridTemplateColumns={`auto auto auto auto`}>
          {/* {heartItems} */}
          <Card
            type={type}
            suit={`heart`}
            value={3}
            index={28}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={4}
            index={29}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={5}
            index={30}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={6}
            index={31}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={7}
            index={32}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={8}
            index={33}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={9}
            index={34}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={10}
            index={35}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={"J"}
            index={36}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={"Q"}
            index={37}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={"K"}
            index={38}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Box></Box>
          <Card
            type={type}
            suit={`heart`}
            value={"A"}
            index={26}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`heart`}
            value={2}
            index={27}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box display={"grid"} gridTemplateColumns={`auto auto auto auto`}>
          <Card
            type={type}
            suit={`spade`}
            value={3}
            index={41}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={4}
            index={42}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={5}
            index={43}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={6}
            index={44}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={7}
            index={45}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={8}
            index={46}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={9}
            index={47}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={10}
            index={48}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={"J"}
            index={49}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={"Q"}
            index={50}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={"K"}
            index={51}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Box></Box>
          <Card
            type={type}
            suit={`spade`}
            value={"A"}
            index={39}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`spade`}
            value={2}
            index={40}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box display={"grid"} gridTemplateColumns={`auto auto auto auto`}>
          <Card
            type={type}
            suit={`club`}
            value={3}
            index={15}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={4}
            index={16}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={5}
            index={17}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={6}
            index={18}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={7}
            index={19}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={8}
            index={20}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={9}
            index={21}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={10}
            index={22}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={"J"}
            index={23}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={"Q"}
            index={24}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={"K"}
            index={25}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Box></Box>
          <Card
            type={type}
            suit={`club`}
            value={"A"}
            index={13}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`club`}
            value={2}
            index={14}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box display={"grid"} gridTemplateColumns={`auto auto auto auto`}>
          <Card
            type={type}
            suit={`diamond`}
            value={3}
            index={2}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={4}
            index={3}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={5}
            index={4}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={6}
            index={5}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={7}
            index={6}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={8}
            index={7}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={9}
            index={8}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={10}
            index={9}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={"J"}
            index={10}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={"Q"}
            index={11}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={"K"}
            index={12}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Box></Box>
          <Card
            type={type}
            suit={`diamond`}
            value={"A"}
            index={0}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`diamond`}
            value={2}
            index={1}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box display={"grid"} gridTemplateColumns={`auto auto`}>
          <Card
            type={type}
            suit={`JOKERA`}
            value={"JOKER"}
            index={53}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
          <Card
            type={type}
            suit={`JOKERB`}
            value={"JOKER"}
            index={52}
            srcLists={srcLists}
            setSrcLists={setSrcLists}
          />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default PlayingCardListA;
