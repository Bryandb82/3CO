import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageBoxInterface {
  imgSrc: StaticImageData;
  imgAlt: string;
  imgFirst: boolean;
  imgHeading: string;
  imgText: string;
}

export default function ImageBox(props: ImageBoxInterface) {
  return (
    <div id="image-box" className="flex flex-col md:flex-row p-10 m-5 w-full lg:w-4/6 items-center">
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        className={`w-1/2 h-auto shadow-xl rounded-xl md:${
          props.imgFirst ? "order-0" : "order-1"
        }`}
      />
      <div
        id="ImageBoxTextContainer"
        className="w-1/2 text-center flex flex-col m-auto p-6"
      >
        <div className="text-5xl mb-6 font-bold">{props.imgHeading} </div>
        <div className="text-3xl ">{props.imgText}</div>
      </div>
    </div>
  );
}
