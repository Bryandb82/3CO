import Image from "next/image";
import { brands, BrandComponentInterface } from "@/constants/brands";
import Marquee from "react-fast-marquee";
import React from "react";

export function BrandBar({
  brandList = brands,
  setBrand,
}: BrandComponentInterface) {
  return (
    <div id="brandBarContainer" className="flex w-full h-32 bg-groupbg">
      <Marquee pauseOnHover gradient>
        {brandList.map((brand, index) => (
          <div
            className="flex h-64 w-64 items-center mx-16"
            key={index}
            onClick={() => setBrand(brands[index].name)}
          >
            <Image
              width={250}
              height={250}
              src={brand.image}
              alt={brand.altText}
              className="flex flex-col"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default BrandBar;
