"use client";
import Logo from "@/components/Logo";
import React, { useState } from "react";
import Image from "next/image";
import {
  certifications,
  CertificationType,
  CertificationListType,
} from "@/constants/certifications";
import CertCarousel from "@/app/about/CertCarousel";
import BrandBanner from "@/components/BrandBanner";
import CertSelector from "@/app/about/CertSelector";
import whiteLogo from "$/WhiteLogo.png";

const defaultCard: CertificationType = {
  brand: "Default",
  name: "default",
  fancyName: "Default",
  image: whiteLogo,
  href: "/",
  altText: "Default data",
  infoText: "Default Information",
  showcaseImage: whiteLogo,
};

function Home() {
  const [currentCert, setCert] = useState<CertificationType>(defaultCard);

  return (
    <div className="Full-Page">
      <BrandBanner className="text-content" />
      <div id="about-container" className="flex flex-1 flex-col">
        <p className="About-Text w-full h-auto md:px-48 py-2 text-center">
          Welcome to Colorado Conference Connection, your premier destination
          for conference system solutions, catering to events both big and
          small. With over 15 years of experience in the industry, we have honed
          our expertise to bring you unparalleled services tailored to your
          conference needs. <br />
          <br />
          At Colorado Conference Connection, we understand the intricate
          dynamics of conference systems. Having navigated through various
          platforms over the years, we have carefully curated partnerships with
          leading companies to bring you the most reliable and efficient
          solutions available in the market. <br />
          <br />
          Our focus lies in three key areas: design, programming, and remote
          support. Whether you&apos;re conceptualizing a new conference setup,
          in need of customized programming solutions, or require remote
          assistance to ensure seamless operation, our dedicated team is here to
          exceed your expectations. <br />
          <br />
          With a commitment to excellence and a passion for innovation, we pride
          ourselves on delivering results that elevate your conference
          experience. Trust Colorado Conference Connection to be your trusted
          partner in transforming your vision into reality.
        </p>
        <div
          id="about-certification-container"
          className="flex flex-1 flex-col w-full h-1/2 items-center"
        >
          <CertSelector
            certs={certifications}
            className="flex w-full h-64 bg-opacity-60 bg-content border-t-4 border-b-4 justify-center items-center my-8 Cert-Selector"
            selectCert={setCert}
            currentCert={currentCert}
          />
          <CertCarousel
            certs={certifications}
            currentCert={currentCert}
            className="w-full h-full mb-16"
            setCert={setCert}
            changeInterval={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
