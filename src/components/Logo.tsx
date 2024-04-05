"use client";
import Image from "next/image";
import blackLogo from "/public/BlackLogo.png";
import whiteLogo from "/public/WhiteLogo.png";
import { useTheme } from "@/constants/ThemeContext";

export default function Logo({
  themeOverride,
  className,
}: {
  themeOverride?: string;
  className?: string;
}) {
  const { theme } = useTheme();

  const logoSrc = themeOverride
    ? themeOverride === "light"
      ? blackLogo
      : whiteLogo
    : theme === "light"
    ? blackLogo
    : whiteLogo;

  return (
    <div>
      <Image src={logoSrc} alt="Company Logo" className={`${className}`} />
    </div>
  );
}
