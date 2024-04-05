import React from "react";
import Image from "next/image";
import { Brand } from "@/constants/brands";
import { brands } from "@/constants/brands";

function BrandInfoBox({ brand = brands[6] }: { brand?: Brand }) {
  return (
    <div id="brand-info-container" className="flex w-full bg-accent-1">
      <div
        id="brand-info-inner-container"
        className="flex flex-col w-full md:m-24 md:flex-row rounded-2xl shadow-xl bg-bg"
      >
        <div
          id="brand-image-container"
          className="flex items-center justify-around w-1/3"
        >
          <div
            id="brand-image-inner-container"
            className="flex flex-1 h-1/5 m-2 bg-groupbg rounded-xl items-center justify-center"
          >
            <Image
              width={300}
              height={300}
              src={brand.image}
              alt={brand.altText}
            />
          </div>
        </div>
        <div
          id="brand-showcase-container"
          className="flex flex-1 flex-col w-2/3"
        >
          <div
            id="brand-showcase-image"
            className="flex h-1/3 m-8 align-middle"
          >
            <Image
              width={700}
              height={700}
              src={brand.showcaseImage}
              alt={brand.altText}
              className="flex-1 object-contain"
            />
          </div>
          <div
            id="brand-text-container"
            className="flex flex-1 w-full items-center justify-center brandText"
          >
            <p>{brand.infoText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandInfoBox;
