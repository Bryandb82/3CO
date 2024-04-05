import Image, { StaticImageData } from "next/image";
import ImageBox from "@/components/ImageBox";
import BrandBox from "@/components/brands/BrandBox";

import scenicImage from "/public/ScenicConference.jpg";
import largeConference from "/public/LargeConference.jpg";
import simpleConference from "/public/SimpleConference.jpg";
import schedulePicture from "/public/Scheduling.jpg";
import supportPicture from "/public/SupportPicture.jpg";
import TechnologyBox from "@/components/technologies/TechnologyBox";
import LogoWithText from "@/components/LogoWithText";
import IntroText from "@/components/IntroText";

export default function Home() {
  return (
    <div className={`Full-Page`}>
      <div id="home-snap-container " className="Snap-Box-Container">
        <div className="Snap-Section">
          <Image
            src={scenicImage}
            alt="Scenic Conference Room"
            className="w-full h-auto z-1"
          />
          <LogoWithText className="flex flex-col mt-8 items-center justify-start absolute" />

          <IntroText className="text-4xl w-5/6 my-2" />
        </div>

        <div className="Snap-Section justify-center">
          <ImageBox
            imgSrc={simpleConference}
            imgAlt="conference room large screen and the company logo"
            imgFirst={true}
            imgHeading="Simplicity"
            imgText={
              "Simple is best.  Complexity adds compromise.  By minimizing our partners and products, we maximize reliability"
            }
          />
        </div>
        <div className="Snap-Section justify-center">
          <ImageBox
            imgSrc={supportPicture}
            imgAlt="person in large event space with large crowd, insert of a support tech somewhere else helping"
            imgFirst={false}
            imgHeading="Support"
            imgText={
              "The best brands in the industry, come with the best in support.  With our remote options, get the support you need, when you need it."
            }
          />
        </div>
        <div className="Snap-Section justify-center">
          <ImageBox
            imgSrc={schedulePicture}
            imgAlt="man standing outside a room, scheduling it with his phone"
            imgFirst={true}
            imgHeading="Flexibility"
            imgText={
              "Use the technology you're already efficient in.  Schedule a room with your own phone, or drive a meeting with your own laptop."
            }
          />
        </div>
        <div className="Snap-Section justify-center">
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

        <div className="Snap-Section justify-center">
          <h1 className="text-8xl mt-40 mb-40">The brands we trust</h1>
          <BrandBox />
        </div>
        <div className="Snap-Section justify-center">
          <h1 className="text-8xl mt-40 mb-40">The technologies we use</h1>
          <TechnologyBox />
        </div>
      </div>
    </div>
  );
}
