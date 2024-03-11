import { StaticImageData } from "next/image";

import microsoftLogo from "/public/brands/MicrosoftLogo.png";
import qscLogo from "/public/brands/QSCLogo.svg";
import crestronLogo from "/public/brands/CrestronLogo.png";
import auroraLogo from "/public/brands/AuroraLogo.png";
import libertyLogo from "/public/brands/LibertyLogo.png";
import netgearLogo from "/public/brands/NetgearLogo.png";
import shureLogo from "/public/brands/ShureLogo.svg";
import logitechLogo from "/public/brands/LogitechLogo.png";

import microsoftShowcaseImage from "/public/brands/MicrosoftShowcaseImage.jpg";
import qscShowcaseImage from "/public/brands/QSCShowcaseImage.jpg";
import crestronShowcaseImage from "/public/brands/CrestronShowcaseImage.jpg";
import auroraShowcaseImage from "/public/brands/AuroraShowcaseImage.webp";
import libertyShowcaseImage from "/public/brands/LibertyShowcaseImage.jpg";
import netgearShowcaseImage from "/public/brands/NetgearShowcaseImage.jpg";
import shureShowcaseImage from "/public/brands/ShureShowcaseImage.jpg";
import logitechShowcaseImage from "/public/brands/LogitechShowcaseImage.jpg";

export type Brand = {
  name: string;
  image: StaticImageData;
  href: string;
  altText: string;
  infoText: string;
  showcaseImage: StaticImageData;
};

export type BrandComponentInterface = {
  brandList?: Brand[];
  setBrand: (selected: string) => void;
};

export const brands = [
  {
    name: "microsoft",
    image: microsoftLogo,
    href: "https://www.microsoft.com",
    altText: "Microsoft Logo",
    infoText:
      "Microsoft has earned its reputation as a trusted partner through decades of providing cutting-edge technology solutions that empower businesses worldwide. Their commitment to innovation, coupled with a focus on reliability and security, makes them an ideal choice for Colorado Conference Connection. From the robust productivity tools of Microsoft Office to the scalable cloud services of Azure, Microsoft offers a comprehensive suite of solutions tailored to the needs of modern businesses. With a proven track record of delivering high-quality software and services, Microsoft ensures that our clients benefit from reliable, secure, and feature-rich technology that enhances their conference experiences and drives success.",
    fancyName: "Microsoft",
    showcaseImage: microsoftShowcaseImage,
  },
  {
    name: "qsc",
    image: qscLogo,
    href: "https://www.qsc.com/",
    altText: "QSC Logo",
    infoText:
      "QSC is a trailblazer in the audio industry, renowned for its relentless pursuit of excellence and innovation. Colorado Conference Connection trusts QSC's unparalleled range of audio solutions, including amplifiers, loudspeakers, and digital signal processors, to deliver unmatched performance and reliability. QSC's commitment to pushing the boundaries of audio technology ensures that their products deliver pristine sound quality, robust durability, and intuitive operation, making them ideal for conferences and events of any scale. With QSC as our partner, we guarantee an immersive auditory experience that captivates audiences and enhances the impact of your message, ensuring that your conferences are memorable and effective.",
    fancyName: "QSC",
    showcaseImage: qscShowcaseImage,
  },
  {
    name: "crestron",
    image: crestronLogo,
    href: "https://www.crestron.com/",
    altText: "Crestron Logo",
    infoText:
      "Crestron is synonymous with innovation and reliability in the realm of integrated technology solutions, making them an indispensable partner for Colorado Conference Connection. With a rich history of pushing the boundaries of what's possible in automation, control, and audio-visual integration, Crestron offers a comprehensive suite of products and services designed to streamline and elevate the conference experience. From intuitive room control systems to cutting-edge collaboration tools, Crestron solutions are engineered with precision and built to withstand the rigors of daily use. Their commitment to interoperability and scalability ensures seamless integration with existing infrastructure and future-proofing for evolving needs. By choosing Crestron, we empower our clients with the tools they need to create dynamic and immersive conference environments that inspire collaboration and drive productivity.",
    fancyName: "Crestron",
    showcaseImage: crestronShowcaseImage,
  },
  {
    name: "aurora",
    image: auroraLogo,
    href: "https://auroramultimedia.com/",
    altText: "Aurora Multimedia Logo",
    infoText:
      "Aurora Multimedia stands at the forefront of audio-visual integration, known for its innovative solutions that seamlessly combine cutting-edge technology with user-friendly design. Colorado Conference Connection relies on Aurora Multimedia's comprehensive range of products, including video processors, AV over IP solutions, and control systems, to deliver immersive and interactive conference experiences. Aurora Multimedia's commitment to quality and reliability ensures that their products exceed industry standards, providing our clients with the confidence that their conference technology will perform flawlessly every time. With Aurora Multimedia as our partner, we guarantee seamless integration, intuitive operation, and unparalleled performance, enabling our clients to create dynamic and impactful conferences that leave a lasting impression on attendees.",
    fancyName: "Aurora Multimedia",
    showcaseImage: auroraShowcaseImage,
  },
  {
    name: "liberty",
    image: libertyLogo,
    href: "https://libertycable.com",
    altText: "Liberty Logo",
    infoText:
      "Liberty AV Solutions is renowned for its commitment to providing cutting-edge audio-visual solutions that seamlessly integrate with existing technology ecosystems. As a trusted partner of Colorado Conference Connection, Liberty AV Solutions offers a comprehensive range of products designed to enhance connectivity, simplify installations, and optimize the conference experience. From reliable HDMI and USB cables to advanced signal processing and distribution solutions, Liberty AV Solutions prioritizes quality, durability, and ease of use in every product they offer. Their dedication to innovation and customer satisfaction ensures that our clients benefit from reliable, high-performance AV solutions that meet the demands of modern conference environments. With Liberty AV Solutions as our partner, we guarantee a seamless integration of audio-visual technology that enhances communication, collaboration, and productivity during conferences",
    fancyName: "Liberty",
    showcaseImage: libertyShowcaseImage,
  },
  {
    name: "netgear",
    image: netgearLogo,
    href: "https://netgear.com/",
    altText: "Netgear Logo",
    infoText:
      "Netgear has earned its reputation as a trusted partner through its commitment to providing high-performance networking solutions that empower businesses to thrive in the digital age. With a focus on innovation, ease of use, and reliability, Netgear offers a wide range of products tailored to meet the unique needs of Colorado Conference Connection. From robust routers and switches to advanced wireless access points, Netgear delivers the connectivity solutions necessary to support seamless communication and collaboration during conferences and events. Their dedication to quality ensures that our clients can rely on Netgear equipment to provide fast, secure, and stable network connections, enabling uninterrupted access to vital resources and enhancing the overall conference experience. With Netgear as our partner, we ensure that your conference connectivity needs are met with confidence and efficiency.",
    fancyName: "Netgear",
    showcaseImage: netgearShowcaseImage,
  },
  {
    name: "shure",
    image: shureLogo,
    href: "https://shure.com/",
    altText: "Shure Logo",
    infoText:
      "Shure stands as a beacon of excellence in the audio industry, renowned for its commitment to delivering unparalleled sound quality and reliability. With a legacy spanning nearly a century, Shure's dedication to innovation and craftsmanship has solidified its position as a trusted partner for Colorado Conference Connection. From iconic microphones to state-of-the-art wireless systems, Shure products are engineered to exceed expectations in even the most demanding environments. Their unwavering focus on performance, durability, and user-friendly design ensures that our clients can rely on Shure equipment to deliver crystal-clear audio, enhancing the impact and professionalism of every conference and event. With Shure as our partner, we guarantee an immersive and flawless auditory experience that leaves a lasting impression on your audience.",
    fancyName: "Shure",
    showcaseImage: shureShowcaseImage,
  },
  {
    name: "logitech",
    image: logitechLogo,
    href: "https://logitech.com/",
    altText: "Logitech Logo",
    infoText:
      "Logitech is a trusted partner known for its dedication to providing high-quality, user-friendly collaboration tools that enhance communication and productivity. Colorado Conference Connection relies on Logitech's extensive range of products, from webcams and conference cameras to audio equipment and presentation remotes, to deliver seamless and engaging conference experiences. Logitech's commitment to innovation ensures that their products are equipped with advanced features such as HD video, crystal-clear audio, and intuitive controls, empowering our clients to connect, communicate, and collaborate effortlessly. With Logitech as our partner, we guarantee reliable, high-performance solutions that elevate the quality of conferences and events, enabling participants to focus on meaningful interactions and achieve their objectives with confidence.",
    fancyName: "Logitech",
    showcaseImage: logitechShowcaseImage,
  },
];
