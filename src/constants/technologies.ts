import { StaticImageData } from "next/image";

import teamsLogo from "/public/technology/TeamsLogo.png";
import qsysLogo from "/public/technology/QSysLogo.svg";
import danteLogo from "/public/technology/DanteLogo.svg";
import ndiLogo from "/public/technology/NDILogo.svg";
import sdvoeLogo from "/public/technology/SDVoELogo.png";
import web3Logo from "/public/technology/Web3Logo.png";
import usbLogo from "/public/technology/USBLogo.png";

export type TechnologyType = {
  name: string;
  fancyName: string;
  image: StaticImageData;
  href: string;
  altText: string;
  infoText: string;
  showcaseImage: StaticImageData;
};

export type TechnologyComponentType = {
    technologyList?: TechnologyType[];
    setTechnology: (selected: string) => void;
  };

  export const technologies: TechnologyType[] = [
    {
      fancyName: "Microsoft Teams",
      name: "microsoft teams",
      image: teamsLogo,
      href: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
      altText: "Microsoft Teams Logo",
      infoText: "This software provides collaboration and communication tools for businesses.",
      showcaseImage: teamsLogo
    },
    {
      fancyName: "QSys",
      name: "qsys",
      image: qsysLogo,
      href: "https://www.qsys.com/",
      altText: "QSys Logo",
      infoText: "QSys offers audio, video, and control solutions for installations worldwide.",
      showcaseImage: qsysLogo
    },
    {
      fancyName: "Dante",
      name: "dante",
      image: danteLogo,
      href: "https://www.getdante.com/",
      altText: "Dante Logo",
      infoText: "Dante provides seamless digital audio networking solutions.",
      showcaseImage: danteLogo
    },
    {
      fancyName: "NDI",
      name: "ndi",
      image: ndiLogo,
      href: "https://www.ndi.video/",
      altText: "NDI Logo",
      infoText: "NDI offers high-quality video over standard IP networks.",
      showcaseImage: ndiLogo
    },
    {
      fancyName: "SDVOE",
      name: "sdvoe",
      image: sdvoeLogo,
      href: "https://sdvoe.org/",
      altText: "SDVoE Logo",
      infoText: "SDVoE provides an AV-over-IP transport and control platform.",
      showcaseImage: sdvoeLogo
    },
    {
      fancyName: "Web3",
      name: "web3",
      image: web3Logo,
      href: "https://web3.foundation/",
      altText: "Web3 Logo",
      infoText: "Web3 is dedicated to developing decentralized web technologies.",
      showcaseImage: web3Logo
    },
    {
      fancyName: "USB",
      name: "usb",
      image: usbLogo,
      href: "https://USB.org/",
      altText: "USB Logo",
      infoText: "USB offers industry standards for data transfer and power supply.",
      showcaseImage: usbLogo
    },
];
