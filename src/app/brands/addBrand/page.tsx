"use client";

import React, { useState } from "react";
import { BrandType, brands } from "@/constants/brands";
import ExistingBrandsList from "./ExistingBrandsList";
import Image from "next/image";
function Home() {
  const [currentBrand, setCurrentBrand] = useState<BrandType>(brands[1]);

  return (
    <div className="Full-Page">
      <div id="brand-addBrand-container" className="flex flex-grow">
        <ExistingBrandsList brands={brands} currentBrand={currentBrand} />
        <div
          id="brand-info-container"
          className="Brand-Info-Container flex flex-grow flex-col h-auto w-2/3 bg-bg2 rounded-xl shadow-lg items-center m-8 p-8 justify-evenly font"
        >
          <form
            id="brand-info-form"
            className="flex flex-grow flex-col Fit-Content justify-evenly"
          >
            <div id="brand-info-names-container" className="flex gap-4">
              <div
                id="brand-info-name-container"
                className="flex flex-col flex-1"
              >
                <label htmlFor="name">
                  Internal Brand Name(all lower case):
                </label>
                <input type="text" id="brand-info-name" name="brandName" />
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
                />
              </div>
            </div>

            <label htmlFor="infoText">Brand Description:</label>
            <textarea id="brand-info-infoText" name="brandInfoText"></textarea>
            <label htmlFor="infoText">Showcase Text:</label>
            <textarea
              id="brand-info-showcase-text"
              name="brandInfoShowcaseText"
            ></textarea>

            <div id="brand-info-images-container">
              <label htmlFor="brandLogo">Brand Logo:</label>
              <input type="file" id="brandLogo" name="brandLogo" />
              <Image src={currentBrand.image} alt={currentBrand.altText} />
              <label htmlFor="altText">Brand Logo Description:</label>
              <textarea id="brand-info-altText" name="brandAltText"></textarea>
              <label htmlFor="showcaseImage">Showcase Image:</label>
              <input
                type="file"
                id="showcase-image"
                name="brandShowcaseImage"
              />
              <label htmlFor="showcaseAltText">Showcase Alt Text:</label>
              <textarea
                id="brand-info-showcaseAltText"
                name="brandShowcaseAltText"
              ></textarea>
            </div>

            <label htmlFor="brandType">Brand Type:</label>
            <select id="brandType" name="brandType">
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
