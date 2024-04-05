"use client";
import Image from "next/image";
import sunSVG from "/public/Sun.svg";
import moonSVG from "/public/Moon.svg";
import { useTheme } from "@/constants/ThemeContext";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-bg">
      <button
        id="darkModeButton"
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        className=" p-2"
      >
        <Image
          src={theme == "dark" ? sunSVG : moonSVG}
          alt="Dark Mode Button"
        />
      </button>
    </div>
  );
}
