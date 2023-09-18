/**
 * Draggable Image component in AI image library
 * @param imageSrc : string
 */

import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DraggableImage = ({ imageSrc }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "IMAGE",
    item: { src: imageSrc },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={dragRef}
      style={{ opacity: isDragging ? 0.5 : 1, width: "180px", height: "180px" }}
      src={imageSrc}
      alt="draggable image"
    />
  );
};

export default DraggableImage;
