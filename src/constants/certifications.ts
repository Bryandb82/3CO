import { StaticImageData } from "next/image";
import blackLogo from "/public/BlackLogo.png";

import dante1 from "/public/certifications/audinate/DanteLevel1.png";
import dante2 from "/public/certifications/audinate/DanteLevel2.png";
import dante3 from "/public/certifications/audinate/DanteLevel3.png";
import danteDDM from "/public/certifications/audinate/DanteDDM.png";
import danteTech from "/public/certifications/audinate/DanteTechMaster.png";
import danteAV from "/public/certifications/audinate/DanteAV.png";

import crestronCTICCT from "/public/certifications/crestron/CTI-CCT.png";
import crestronDMNVXN from "/public/certifications/crestron/DM-NVX-N.png";
import crestronDMCT4K from "/public/certifications/crestron/DMC-T-4K.png";

export type CertificationType = {
  brand: string;
  name: string;
  fancyName: string;
  image: StaticImageData;
  href?: string;
  altText: string;
  infoText: string;
  showcaseImage?: StaticImageData;
};

export type CertificationListType = {
  certList: CertificationType[];
};

export const certifications: CertificationListType = {
  certList: [
    {
      brand: "audinate",
      name: "dante level 1",
      fancyName: "Dante Level 1",
      image: dante1,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "Dante Certification Level 1 provides an introduction to the Dante platform. It offers fundamental knowledge on digital audio, digital video, basic network and how to setup a basic Dante network using Dante Controller. This course provides enough knowledge to operate a Dante system in daisy chain mode or on a single network switch.",
      showcaseImage: blackLogo,
    },
    {
      brand: "audinate",
      name: "dante level 2",
      fancyName: "Dante Level 2",
      image: dante2,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "Dante Certification Level 2 offers a deeper explanation of how to create larger networks. This class offers insights on how much bandwidth is used, how to manage it, basic optimization and factors if you wish to chase an external clock. Level 2 is helpful when working on systems that will involve multiple network switches.",
      showcaseImage: blackLogo,
    },
    {
      brand: "audinate",
      name: "dante level 3",
      fancyName: "Dante Level 3",
      image: dante3,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "Dante Certification Level 3 builds the necessary skills to navigate a Layer 3 enterprise network. This includes explanations of what Layer 3 means, why it is helpful and how Dante systems can naturally span a building, a campus, or even multiple properties. It also offers demonstrations of Dante Domain Manager connecting devices across Layer 3 boundaries. This class is especially helpful to those who want to build a large Dante network and those who wish to improve their ability to work with IT staff at large organizations.",
      showcaseImage: blackLogo,
    },
    {
      brand: "audinate",
      name: "dante DDM",
      fancyName: "Dante DDM",
      image: danteDDM,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "The Dante Domain Manager Administrator Certification is the long-awaited, comprehensive training module for those looking to expand their knowledge beyond Dante Levels 1, 2 and 3. As Dante networks have become larger and more complex, the need for logical segmentation, advanced clocking configurations, user management and detailed logging have become required features. Dante Domain Manager provides all of those functions and so much more.",
      showcaseImage: blackLogo,
    },
    {
      brand: "audinate",
      name: "dante tech mastery",
      fancyName: "Dante Mastery Technician",
      image: danteTech,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "Launched in May 2023, the Dante Mastery class is Audinate’s first and only paid, hands-on, in person certification course. Consisting of 4 days of intensive training at Audinate’s U.S. headquarters in Portland, Oregon, the Dante Mastery course truly sets a certificate holder’s knowledge apart by providing real world switch configuration scenarios, creating a large layer 3 network, and deploying Dante Domain Manager to manage the entire classroom’s network of 16 identical lab stations.",
      showcaseImage: blackLogo,
    },
    {
      brand: "audinate",
      name: "dante av",
      fancyName: "Dante AV",
      image: danteAV,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "During this hour-long, on-demand training session, we explain the key concepts around the Dante video platform called “Dante AV.”Already established as the de facto standard for networked audio, Dante AV now adds a variety of video endpoints into the Dante ecosystem, making it easier than ever to deploy comprehensive AV solutions managed under a single unified control and management system. This course illustrates just how easy it is to deploy Dante video alongside Dante audio, and goes into detail on the various types of Dante AV products such as Dante AV Ultra, Dante AV-H and Dante Studio.",
      showcaseImage: blackLogo,
    },
    {
      brand: "crestron",
      name: "crestron cticct",
      fancyName: "Crestron CTI-CCT",
      image: crestronCTICCT,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "During this hour-long, on-demand training session, we explain the key concepts around the Dante video platform called “Dante AV.”Already established as the de facto standard for networked audio, Dante AV now adds a variety of video endpoints into the Dante ecosystem, making it easier than ever to deploy comprehensive AV solutions managed under a single unified control and management system. This course illustrates just how easy it is to deploy Dante video alongside Dante audio, and goes into detail on the various types of Dante AV products such as Dante AV Ultra, Dante AV-H and Dante Studio.",
      showcaseImage: blackLogo,
    },
    {
      brand: "crestron",
      name: "crestron dmnvxn",
      fancyName: "Crestron DM-NVX-N",
      image: crestronDMNVXN,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "During this hour-long, on-demand training session, we explain the key concepts around the Dante video platform called “Dante AV.”Already established as the de facto standard for networked audio, Dante AV now adds a variety of video endpoints into the Dante ecosystem, making it easier than ever to deploy comprehensive AV solutions managed under a single unified control and management system. This course illustrates just how easy it is to deploy Dante video alongside Dante audio, and goes into detail on the various types of Dante AV products such as Dante AV Ultra, Dante AV-H and Dante Studio.",
      showcaseImage: blackLogo,
    },
    {
      brand: "crestron",
      name: "crestron dmct4k",
      fancyName: "Crestron DMC-T-4K",
      image: crestronDMCT4K,
      href: "href not available",
      altText: "Default Alt Text",
      infoText:
        "During this hour-long, on-demand training session, we explain the key concepts around the Dante video platform called “Dante AV.”Already established as the de facto standard for networked audio, Dante AV now adds a variety of video endpoints into the Dante ecosystem, making it easier than ever to deploy comprehensive AV solutions managed under a single unified control and management system. This course illustrates just how easy it is to deploy Dante video alongside Dante audio, and goes into detail on the various types of Dante AV products such as Dante AV Ultra, Dante AV-H and Dante Studio.",
      showcaseImage: blackLogo,
    },
  ],
};
