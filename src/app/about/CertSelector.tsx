import React from "react";
import {
  CertificationListType,
  CertificationType,
  certifications,
} from "@/constants/certifications";
import Image from "next/image";

type CertSelectorProps = {
  className: string;
  certs: CertificationListType;
  selectCert: React.Dispatch<React.SetStateAction<CertificationType>>;
  currentCert: CertificationType;
};

function CertSelector({
  className,
  certs,
  selectCert,
  currentCert,
}: CertSelectorProps) {
  return (
    <div id="certification-selector" className={className}>
      {certs.certList.map((cert, index) => (
        <div
          key={index}
          className={`cursor-pointer mx-8 ${
            cert === currentCert
              ? "Cert-Selector Cert-Selector-Cert-Selected"
              : null
          }`}
          onClick={() => selectCert(cert)}
        >
          <Image src={cert.image} alt={cert.altText} width="200" className="" />
        </div>
      ))}
    </div>
  );
}

export default CertSelector;
