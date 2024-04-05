import { BrandType } from "@/constants/brands";
import React from "react";

type ExistingBrandsListProps = {
  brands: BrandType[];
  currentBrand: BrandType;
};

function ExistingBrandsList({ brands, currentBrand }: ExistingBrandsListProps) {
  return (
    <div
      id="brand-info-existing-brands-container"
      className="flex flex-col w-1/3 rounded-xl shadow-lg m-8 py-8 px-2 bg-bg2"
    >
      <button className="h-32 bg-accent-1 border-4 m-4 rounded-full text-5xl shadow-xl">
        New
      </button>
      <ul className="flex flex-col flex-grow justify-around bg-bg w-full rounded-xl">
        {brands.map((brand, index) => (
          <li
            key={index}
            className={`text-3xl hover:font-bold rounded-xl ${
              currentBrand ? "text-4xl" : ""
            }`}
          >
            {brand.fancyName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExistingBrandsList;
