import { BrandType } from "@/constants/brands";
import React, { SetStateAction } from "react";

type ExistingBrandsListProps = {
  brands: BrandType[];
  currentBrand: BrandType;
  selectBrand: React.Dispatch<SetStateAction<BrandType>>;
};

function ExistingBrandsList({
  brands,
  currentBrand,
  selectBrand,
}: ExistingBrandsListProps) {
  return (
    <div
      id="brand-info-existing-brands-container"
      className="flex flex-col w-1/3 rounded-xl shadow-lg m-8 py-8 px-2 bg-bg2 Existing-Brand-Container"
    >
      <button className="h-32 bg-accent-1 border-4 m-4 rounded-full text-5xl shadow-xl">
        New
      </button>
      <ul className="flex flex-col flex-grow justify-around bg-bg w-full rounded-xl Existing-Brand-List">
        {brands.map((brand, index) => (
          <li
            key={index}
            onClick={() => selectBrand(brand)}
            className={`text-3xl hover:font-bold rounded-xl ${
              currentBrand === brand ? "text-4xl Item" : ""
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
