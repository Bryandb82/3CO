import Image from "next/image";
import { brands, BrandComponentInterface } from "@/constants/brands";

export function BrandBox({ brandList = brands }: BrandComponentInterface) {
  return (
    <div
      id="brandBoxContainer"
      className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-5/6 h-full lg:w-5/6 items-center bg-groupbg rounded-xl"
    >
      {brandList.map((brand, index) => (
        <div className="flex h-64 items-center p-2 m-auto" key={index}>
          <a href={brand.href}>
            <Image
              width={250}
              height={250}
              src={brand.image}
              alt={brand.altText}
              className="flex flex-col"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default BrandBox;
