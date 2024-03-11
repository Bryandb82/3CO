import Image from "next/image";
import { StaticImageData } from "next/image";

import teamsLogo from "/public/technology/TeamsLogo.png";
import qsysLogo from "/public/technology/QSysLogo.svg";
import danteLogo from "/public/technology/DanteLogo.svg";
import ndiLogo from "/public/technology/NDILogo.svg";
import sdvoeLogo from "/public/technology/SDVoELogo.png";
import web3Logo from "/public/technology/Web3Logo.png";
import usbLogo from "/public/technology/USBLogo.png";

const technologys = [
  {
    name: "Microsoft Teams",
    image: teamsLogo,
    href: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
    altText: "Microsoft Teams Logo",
  },
  {
    name: "QSys",
    image: qsysLogo,
    href: "https://www.qsys.com/",
    altText: "QSys Logo",
  },
  {
    name: "Dante",
    image: danteLogo,
    href: "https://www.getdante.com/",
    altText: "Dante Logo",
  },
  {
    name: "NDI",
    image: ndiLogo,
    href: "https://www.ndi.video/",
    altText: "NDI Logo",
  },
  {
    name: "SDVOE",
    image: sdvoeLogo,
    href: "https://sdvoe.org/",
    altText: "SDVoE Logo",
  },
  {
    name: "Web3",
    image: web3Logo,
    href: "https://web3.foundation/",
    altText: "Web3 Logo",
  },
  {
    name: "USB",
    image: usbLogo,
    href: "https://USB.org/",
    altText: "USB Logo",
  },
];

type Technology = {
  name: string;
  image: StaticImageData;
  href: string;
  altText: string;
};

type TechnologyBoxInterface = {
  technologyList: Technology[];
};

export function TechnologyBox({
  technologyList = technologys,
}: TechnologyBoxInterface) {
  return (
    <div
      id="technologyBoxContainer"
      className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-5/6 h-full lg:w-5/6 items-center bg-groupbg rounded-xl"
    >
      {technologyList.map((technology, index) => (
        <div className="flex h-64 mx-auto items-center" key={index}>
          <a href={technology.href}>
            <Image
              width={250}
              height={250}
              src={technology.image}
              alt={technology.altText}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default TechnologyBox;
