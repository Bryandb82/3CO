import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageUploadContainerProps = {
  image: StaticImageData;
};

function ImageUploadContainer() {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt={altText} />
    </div>
  );
}

export default ImageUploadContainer;
