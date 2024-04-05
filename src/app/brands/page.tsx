"use client";

import { useState } from "react";
import BrandBar from "@/components/brands/BrandBar";
import BrandInfoBox from "@/components/brands/BrandInfoBox";
import { brands, Brand } from "@/constants/brands";

export default function BrandPage() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | undefined>();

  const setBrand = (selected: string) => {
    const foundBrand = brands.find((brand) => brand.name === selected);
    setSelectedBrand(foundBrand);
  };

  return (
    <div className="fullPage">
      <BrandBar setBrand={setBrand} />
      <BrandInfoBox brand={selectedBrand} />
    </div>
  );
}
