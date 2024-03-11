"use client";
import Image from "next/image";
import blackLogo from "/public/BlackLogo.png";
import whiteLogo from "/public/WhiteLogo.png";
import { useTheme } from "@/app/ThemeContext";

export default function Logo({ themeOverride }: { themeOverride?: string }) {
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
      <Image src={logoSrc} alt="Company Logo" className="mb-2 mt-2" />
    </div>
  );
}
