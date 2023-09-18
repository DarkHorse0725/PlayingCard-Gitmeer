/**
 * Drag Component in playing card component
 *
 *
 */

import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { Box } from "@mui/material";

const CardBox = ({ type, index, srcLists, setSrcLists }) => {
  const [targetSrc, setTargetSrc] = useState("");

  //   drag functions in react-dnd module, set to localstorage and srcList
  const [{ canDrop, isOver }, dropRef, drop] = useDrop(() => ({
    accept: "IMAGE",
    drop: (item) => {
      setTargetSrc(item.src);
      let tempList = srcLists;
      tempList[index] = item.src;
      setSrcLists(tempList);
      localStorage.setItem("srcLists", JSON.stringify(tempList));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  //   init setting
  useEffect(() => {
    if (srcLists[parseInt(index)]) {
      setTargetSrc(srcLists[parseInt(index)]);
    }
  }, []);

  return (
    <CardBoxContainer ref={dropRef}>
      {isActive === true ? (
        <></>
      ) : targetSrc.length > 0 ? (
        <MaskBox type={type}>
          <img
            src={
              srcLists[parseInt(index)].length > 0
                ? srcLists[parseInt(index)]
                : targetSrc
            }
            alt=""
          />
        </MaskBox>
      ) : (
        ""
      )}
    </CardBoxContainer>
  );
};

const CardBoxContainer = styled(Box)`
  width: 172px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MaskBox = styled(Box)`
  transition: 1s;
  clip-path: ${({ type }) =>
    type == "rhombus"
      ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
      : type == "circle"
      ? "circle(50% at 50% 50%)"
      : ""};
    border-radius: 2px;
    background: #f0f0f0;
    // box-shadow: 2px 2px 2px 2px rgba(0.2, 0.2, 0.2, 0.18);
  > img {
    width: 120px;0
    height: 170px;
  }
`;

export default CardBox;
