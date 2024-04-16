"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import CertCard, { CertCardProps } from "@/app/about/CertCard";
import {
  CertificationListType,
  CertificationType,
} from "@/constants/certifications";

import { ThickArrowLeftIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";

type CertCarouselProps = {
  certs: CertificationListType;
  className: string;
  currentCert: CertificationType;
  setCert: Dispatch<SetStateAction<CertificationType>>;
  changeInterval: number;
};

function CertCarousel({
  certs,
  className,
  currentCert,
  setCert,
}: CertCarouselProps) {
  const previousCard = () => {
    const currentIndex = certs.certList.findIndex(
      (cert: CertificationType) => cert === currentCert
    );
    const previousIndex =
      (currentIndex - 1 + certs.certList.length) % certs.certList.length;
    setCert(certs.certList[previousIndex]);
  };

  const nextCard = () => {
    const currentIndex = certs.certList.findIndex(
      (cert: CertificationType) => cert === currentCert
    );
    const nextIndex = (currentIndex + 1) % certs.certList.length;
    setCert(certs.certList[nextIndex]);
  };

  return (
    <div
      id="about-certification-carousel"
      className={`flex flex-row relative ${className}`}
    >
      <button className="Cert-Carousel-Button left" onClick={previousCard}>
        <ThickArrowLeftIcon color="white" className="Cert-Carousel-Icon" />
      </button>

      <CertCard
        cert={currentCert}
        className="flex flex-col w-full h-full items-center"
      />

      <button className="Cert-Carousel-Button right" onClick={nextCard}>
        <ThickArrowRightIcon color="white" className="Cert-Carousel-Icon" />
      </button>
    </div>
  );
}

export default CertCarousel;
