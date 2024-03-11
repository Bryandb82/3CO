"use client";

import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import brandIcon from "/public/brandSVGIcon.svg";
import DarkModeButton from "./DarkModeButton";
import { useTheme } from "@/app/ThemeContext";
import Logo from "./Logo";

type NavItem = {
  text: string;
  href: string;
  icon: StaticImageData;
};

type NavBarInterface = {
  items: NavItem[];
};

NavBar.defaultProps = {
  items: [
    { text: "Services", href: "/services", icon: brandIcon },
    { text: "Brands", href: "/brands", icon: brandIcon },
    { text: "Technology", href: "/technology", icon: brandIcon },
    { text: "Training", href: "/information", icon: brandIcon },
    { text: "Contact", href: "/contact", icon: brandIcon },
    { text: "About", href: "/about", icon: brandIcon },
  ],
};

export default function NavBar({ items }: NavBarInterface) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      id="headerContainer"
      className={`flex flex-row items-center justify-between w-full h-20 top-0 sticky bg-bg text-content border-b-2 z-50`}
    >
      <div id="iconArea" className="flex w-16 p-2">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-row bg-yellow-200 text-right text-3xl"
        >
          <Link className="navLink" href={item.href}>
            <div className="flex flex-row items-center">
              <Image
                src={item.icon}
                alt={item.text + " Logo"}
                height="50"
                width="50"
                className="mr-4 hidden"
              />
              {item.text}
            </div>
          </Link>
        </div>
      ))}
      <div id="endCap" className="flex w-16 justify-around items-center">
        <DarkModeButton />
      </div>
    </div>
  );
}
