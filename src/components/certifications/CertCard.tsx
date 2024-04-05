import React from "react";
import { CertificationType } from "@/constants/certifications";
import Image from "next/image";

export type CertCardProps = {
  cert: CertificationType;
  className?: string;
};

const CertCard: React.FC<CertCardProps> = ({ cert, className }) => {
  return (
    <div id="cert-card" className={className}>
      <div className="grid grid-cols-1 gap-4 h-full w-full">
        <div className="row-span-3 flex flex-1 items-center justify-center">
          <Image
            src={cert.image}
            alt={cert.altText}
            height={1500}
            className="h-full w-auto m-8"
          />
        </div>
        <div className="row-span-1 flex flex-col justify-center">
          <h3 className="About-Cert-Title">{cert.fancyName}</h3>
        </div>
        <div className="row-span-4 flex flex-col justify-center px-32">
          <p className="About-Text">{cert.infoText}</p>
        </div>
      </div>
    </div>
  );
};

export default CertCard;
