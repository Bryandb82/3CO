import Image from "next/image";
import { StaticImageData } from "next/image";
import { technologies, TechnologyType } from "@/constants/technologies";

type TechnologyBoxInterface = {
  technologyList?: TechnologyType[];
};

export function TechnologyBox({
  technologyList = technologies,
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
