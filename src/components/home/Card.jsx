/**
 *  Playing Card Component
 *  @param type : template type, suit : suit , value : number , index : index of Src List, srcLists : Playing Card array, setSrcLists : set function of srcLists
 * 
 */

import { Box } from "@mui/material";
import styled from "styled-components";
import CardBox from "./CardBox";

const Card = ({ type, suit, value, index, srcLists, setSrcLists }) => {
  return (
    <CardContainer>
      <Box className="cards">
        {value != "JOKER" && (
          <Box className={`card card--${suit}`} value={value}>
            <Box className="card__inner card__inner--centered">
              <Box className="card__column">
                <Box className="">
                  <CardBox
                    type={type}
                    index={index}
                    srcLists={srcLists}
                    setSrcLists={setSrcLists}
                  />
                </Box>
                <Box className="card__symbol"></Box>
                <Box className="card__symbol"></Box>
              </Box>
            </Box>
          </Box>
        )}
        {value == "JOKER" && (
          <Box className={`card card--${suit}`}>
            <CardBox type={type} srcLists={srcLists} setSrcLists={setSrcLists} />
            <Box position={`absolute`} top={`10px`} left={`10px`}>
              <Box>J</Box>
              <Box>O</Box>
              <Box>K</Box>
              <Box>E</Box>
              <Box>R</Box>
            </Box>
            <Box position={`absolute`} bottom={`10px`} right={`10px`}>
              <Box style={{ transform: "scale(-1)" }}>R</Box>
              <Box style={{ transform: "scale(-1)" }}>E</Box>
              <Box style={{ transform: "scale(-1)" }}>K</Box>
              <Box style={{ transform: "scale(-1)" }}>O</Box>
              <Box style={{ transform: "scale(-1)" }}>J</Box>
            </Box>
          </Box>
        )}
      </Box>
    </CardContainer>
  );
};

const CardContainer = styled(Box)`
  .cards {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
  }

  .card {
    position: relative;
    display: inline-block;
    width: 172px;
    height: 240px;
    font: 16px "Trebuchet MS";

    margin: 10px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

    &:before,
    &:after {
      content: attr(value);
      position: absolute;
      width: 12px;
      text-align: center;
      letter-spacing: -2px;
    }

    &:before {
      top: 4px;
      left: 4px;
    }

    &:after {
      bottom: 4px;
      right: 4px;
      transform: rotate(180deg);
    }

    &--heart {
      color: #e44145;

      &:before,
      &:after {
        content: attr(value) " ♥";
      }
    }

    &--spade {
      color: #252525;

      &:before,
      &:after {
        content: attr(value) " ♠";
      }
    }
    &--diamond {
      color: #e44145;

      &:before,
      &:after {
        content: attr(value) " ♦️";
      }
    }

    &--club {
      color: #252525;

      &:before,
      &:after {
        content: attr(value) " ♣";
      }
    }

    &--JOKERA {
      color: #e44145;
      text-align: left;
      padding-left: 10px;
      padding-top: 10px;
    }
    &--JOKERB {
      color: #252525;
      text-align: left;
      padding-left: 10px;
      padding-top: 10px;
    }
  }

  .card__inner {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 6 * 4px;
    left: 6 * 4px;
    right: 6 * 4px;
    bottom: 6 * 4px;

    &--centered {
      justify-content: center;
    }
  }

  .card__column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--centered {
      justify-content: center;
    }
  }

  .card__symbol {
    display: inline-block;
    height: @40px;
    text-align: center;

    &:before {
      font-size: @40px;
      line-height: @40px;
    }

    .card--heart &:before {
      content: "♥";
    }

    .card--spade &:before {
      content: "♠";
    }

    &--rotated,
    &:last-of-type {
      transform: rotate(180deg);
    }

    &:first-of-type {
      transform: rotate(0);
    }

    &--big {
      flex-basis: 0.25 * 240px;
    }

    &--huge {
      flex-basis: 0.45 * 240px;
    }
  }

  .title {
    font: 18px "Trebuchet MS";
    color: #444;
    text-align: center;
  }
`;

export default Card;
