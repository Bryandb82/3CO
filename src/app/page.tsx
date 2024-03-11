import Image, { StaticImageData } from "next/image";
import ImageBox from "@/components/ImageBox";
import BrandBox from "@/components/BrandBox";

import blackLogo from "/public/BlackLogo.png";
import whiteLogo from "/public/WhiteLogo.png";

import scenicImage from "/public/ScenicConference.jpg";
import largeConference from "/public/LargeConference.jpg";
import simpleConference from "/public/SimpleConference.jpg";
import schedulePicture from "/public/Scheduling.jpg";
import supportPicture from "/public/SupportPicture.jpg";
import TechnologyBox from "@/components/TechnologyBox";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    //<main className="flex min-h-screen flex-col text-center items-center p-4">
    <div className={`fullPage dark:bg-black} `}>
      <Logo />
      <h1 className="titleNormal mb-5">
        <span className="titleBold">C</span>olorado{" "}
        <span className="titleBold">C</span>onference{" "}
        <span className="titleBold">C</span>onnection
      </h1>
      <Image
        src={scenicImage}
        alt="Scenic Conference Room"
        className="rounded-xl mt-10 mb-0 w-4/6"
      />
      <div
        id="introTextContainer"
        className="flex flex-col w-3/5 text-center m-10 paragraphText"
      >
        <p className="textBlock">Conferencing, has never been easier.</p>
        <p className="textBlock">
          Our experts take the guesswork out of what works.
        </p>
        <p className="textBlock">
          Whether your business uses the industry standard conferencing platform{" "}
          <span className="boldText">Microsoft Teams</span>, or is platform
          agnostic, relying on a <span className="boldText">BYOD </span>(
          <span className="boldText">B</span>ring{" "}
          <span className="boldText">Y</span>our{" "}
          <span className="boldText">O</span>wn{" "}
          <span className="boldText">D</span>evice) philosophy.
        </p>
        <p className="textBlock">
          <span className="boldText">C</span>olorado{" "}
          <span className="boldText">C</span>onference{" "}
          <span className="boldText">C</span>onnection knows what&apos;s
          important to you
        </p>
      </div>
      <div id="ImageBoxContainer" className="flex flex-col w-full items-center">
        <ImageBox
          imgSrc={simpleConference}
          imgAlt="conference room large screen and the company logo"
          imgFirst={true}
          imgHeading="Simplicity"
          imgText={
            "Simple is best.  Complexity adds compromise.  By minimizing our partners and products, we maximize reliability"
          }
        />
        <ImageBox
          imgSrc={supportPicture}
          imgAlt="person in large event space with large crowd, insert of a support tech somewhere else helping"
          imgFirst={false}
          imgHeading="Support"
          imgText={
            "The best brands in the industry, come with the best in support.  With our remote options, get the support you need, when you need it."
          }
        />
        <ImageBox
          imgSrc={schedulePicture}
          imgAlt="man standing outside a room, scheduling it with his phone"
          imgFirst={true}
          imgHeading="Flexibility"
          imgText={
            "Use the technology you're already efficient in.  Schedule a room with your own phone, or drive a meeting with your own laptop."
          }
        />
        <ImageBox
          imgSrc={largeConference}
          imgAlt="large conference full of people"
          imgFirst={false}
          imgHeading="Consistency"
          imgText={
            "You shouldn't have to waste time trying to make a simple meeting just because the conference room you're familiar with is in use.  Keeping room interfaces consistent allows for maximum uptime.   "
          }
        />
      </div>
      <h1 className="text-8xl mt-40 mb-40">The brands we trust</h1>
      <BrandBox />
      <h1 className="text-8xl mt-40 mb-40">The technologies we use</h1>
      <TechnologyBox />
    </div>
  );
}
