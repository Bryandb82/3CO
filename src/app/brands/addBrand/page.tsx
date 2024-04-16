"use client";

import React, { useState } from "react";
import { BrandType, brands } from "@/constants/brands";
import ExistingBrandsList from "./ExistingBrandsList";
import Image from "next/image";
import ImageUploadContainer from "@/components/ImageUploadContainer";
function Home() {
  const [currentBrand, setCurrentBrand] = useState<BrandType>(brands[1]);

  return (
    <div className="Full-Page">
      <div id="brand-addBrand-container" className="flex flex-grow w-2/3">
        <ExistingBrandsList
          brands={brands}
          currentBrand={currentBrand}
          selectBrand={setCurrentBrand}
        />
        <div
          id="brand-info-container"
          className="Brand-Info-Container flex flex-grow flex-col h-auto w-full bg-bg2 rounded-xl shadow-lg items-center m-8 p-8 justify-evenly font"
        >
          <form
            id="brand-info-form"
            className="flex flex-grow flex-col w-full Fit-Content justify-evenly"
          >
            <div id="brand-info-names-container" className="flex gap-4">
              <div
                id="brand-info-name-container"
                className="flex flex-col flex-1"
              >
                <label htmlFor="name">
                  Internal Brand Name(all lower case):
                </label>
                <input
                  type="text"
                  id="brand-info-name"
                  name="brandName"
                  value={currentBrand.name}
                  className="p-4"
                />
              </div>
              <div
                id="brand-info-fancyName-container"
                className="flex flex-col flex-1"
              >
                <label htmlFor="fancyName">
                  External Brand Name(Title Case):
                </label>
                <input
                  type="text"
                  id="brand-info-fancyName"
                  name="brandFancyName"
                  value={currentBrand.fancyName}
                  className="p-4"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="infoText">Brand Description:</label>
              <textarea
                id="brand-info-infoText"
                name="brandInfoText"
                value={currentBrand.brandText}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="infoText">Showcase Text:</label>
              <textarea
                id="brand-info-showcase-text"
                name="brandInfoShowcaseText"
                value={currentBrand.showcaseText}
              ></textarea>
            </div>

            <div id="brand-info-images-container" className="flex">
              <ImageUploadContainer
                image={currentBrand.image}
                altText={currentBrand.altText}
                text="Brand Logo Discription"
                inputFor={`brand-info-brandLogo`}
                value={currentBrand.image}
                className="flex-1"
              />
              <ImageUploadContainer
                image={currentBrand.image}
                altText={currentBrand.showcaseAltText}
                text="Brand Logo Discription"
                inputFor={`brand-info-brandLogo`}
                value={currentBrand.showcaseImage}
                className="flex-1"
              />
            </div>
            <label htmlFor="brandHREF">Brand Website:</label>
            <input type="text" value={currentBrand.href} />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
