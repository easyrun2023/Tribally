import React from "react";
import Image from "./Image";
import LayoutImage from "./LayoutImage";
import TrophyIMG from "../assets/images/trophy.png";

const LayoutImages = () => {
  const images = [
    {
      right: 0,
      left: "-250px",
      bottom: "-100px",
      style: { opacity: 0.3 },
      src: TrophyIMG,
      width: 900,
    },
  ];

  return images.map(
    ({ src, style, top, bottom, left, right, width, height }, index) => (
      <LayoutImage
        style={style}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
      >
        <Image width={width} height={height} src={src} alt={`image-${index}`} />
      </LayoutImage>
    )
  );
};

export default LayoutImages;
