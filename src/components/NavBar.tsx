"use client";

import { StaticImageData } from "next/image";
import brandIcon from "/public/brandSVGIcon.svg";
import { useTheme } from "@/constants/ThemeContext";
import { brands } from "@/constants/brands";
import { technologies } from "@/constants/technologies";
import DropDownBox from "./DropDownBox";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

type SubItemType = {
  label: string;
  href: string;
  icon: StaticImageData;
};

type NavItemType = {
  label: string;
  href: string;
  icon: StaticImageData;
  items: SubItemType[];
};

type NavBarType = {
  items: NavItemType[];
};

NavBar.defaultProps = {
  items: [
    {
      label: "Services",
      href: "/services",
      icon: brandIcon,
      items: [
        {
          label: "System Design",
          href: "/services/system-design",
          icon: brandIcon,
        },
        { label: "Consulting", href: "/services/consulting", icon: brandIcon },
        { label: "Drawings", href: "/services/drawings", icon: brandIcon },
        { label: "Quotes", href: "/services/quotes", icon: brandIcon },
      ],
    },
    {
      label: "Brands",
      href: "/brands",
      icon: brandIcon,
      items: brands.map((brand) => ({
        label: brand.fancyName,
        href: brand.href,
      })),
    },
    {
      label: "Technology",
      href: "/technology",
      icon: brandIcon,
      items: technologies.map((technology) => ({
        label: technology.fancyName,
        href: technology.href,
      })),
    },
    {
      label: "Training",
      href: "/information",
      icon: brandIcon,
      items: [
        {
          label: "Conference Technologies",
          href: "/training/conference-tech",
          icon: brandIcon,
        },
        { label: "Consulting", href: "/services/consulting", icon: brandIcon },
        { label: "Drawings", href: "/services/drawings", icon: brandIcon },
        { label: "Quotes", href: "/services/quotes", icon: brandIcon },
      ],
    },
    { label: "Contact", href: "/contact", icon: brandIcon },
    { label: "About", href: "/about", icon: brandIcon },
  ],
};

export default function NavBar({ items }: NavBarType) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      id="headerContainer"
      className={`flex flex-grow flex-shrink items-center justify-between w-auto Nav-Bar top-0 sticky bg-bg text-content border-b-2 z-50`}
    >
      <div id="iconArea" className="flex w-16 p-2">
        <Link href="/">
          <Logo className="" />
        </Link>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-row flex-1 h-full text-right text-3xl group relative items-center"
        >
          <Link className="navLink" href={item.href}>
            <div className="flex flex-row items-center">
              <Image
                src={item.icon}
                alt={item.label + " Logo"}
                height="50"
                width="50"
                className="mr-4 hidden"
              />
              {item.label}
            </div>
          </Link>
          <div id="nav-link-dropdown">
            {item.items ? (
              <DropDownBox
                items={item.items}
                className="hidden group-hover:block"
              />
            ) : null}
          </div>
        </div>
      ))}
      <div id="endCap" className="flex w-16 justify-around items-center">
        <DarkModeButton />
      </div>
    </div>
  );
}
