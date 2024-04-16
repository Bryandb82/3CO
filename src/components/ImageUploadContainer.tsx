import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageUploadContainerProps = {
  discription: string;
  image: StaticImageData;
  altText: string;
  text: string;
  imageInputFor: string;
  altInputFor: string;
  imageValue: StaticImageData;
  altValue: string;
  className: string;
};

function ImageUploadContainer({
  discription,
  image,
  altText,
  imageInputFor,
  altInputFor,
  imageValue,
  altValue,
  className,
}: ImageUploadContainerProps) {
  return (
    <div
      className={`flex flex-col h-64 justify-evenly items-center ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Image src={image} alt={altText} className="" />
      <label htmlFor={imageInputFor} className="">
        {discription}
      </label>
      <input
        type="file"
        name={imageInputFor}
        id={imageInputFor}
        value={imageValue}
        className=""
      />
      <label htmlFor={altInputFor}>Alt Text</label>
      <input type="text" id={altInputFor} className="w-4/5" />
    </div>
  );
}

export default ImageUploadContainer;
