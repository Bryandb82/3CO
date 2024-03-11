"use client";

import { useState } from "react";
import BrandBar from "@/components/BrandBar";
import BrandInfoBox from "@/components/BrandInfoBox";
import { brands, Brand } from "@/constants/brands";

export default function BrandPage() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | undefined>();

  const setBrand = (selected: string) => {
    const foundBrand = brands.find((brand) => brand.name === selected);
    setSelectedBrand(foundBrand);
  };

  return (
    <div className="fullPage">
      <h1 className="text-8xl">BRANDS</h1>
      <BrandBar setBrand={setBrand} />
      <BrandInfoBox brand={selectedBrand} />
    </div>
  );
}
