"use client";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div
      id="footer"
      className="flex flex-col w-full h-64 border-t-8 border-accent-1"
    >
      <div id="footer-upper-container" className="flex flex-1 flex-row bg-bg">
        <div
          id="footer-left-container"
          className="flex flex-row w-1/2 h-full bg-content items-center justify-center"
        >
          <Logo themeOverride="light" />
          <h1 className="text-5xl bg-content text-bg p-3">
            Colorado Conference Connection
          </h1>
        </div>
        <div
          id="footer-right-container"
          className="flex flex-col items-center w-1/2 h-full bg-content"
        >
          <div id="footer-link-container" className="flex flex-1 items-center">
            <ul
              id="footer-list"
              className="flex flex-col h-full justify-evenly text-3xl text-accent-1"
            >
              <li className="pl-16">
                <Link href="/">
                  <h2>Home</h2>
                </Link>
              </li>
              <li className="pl-8">
                <Link href="/contact">
                  <h2>Contact</h2>
                </Link>
              </li>
              <li className="pl-0">
                <Link href="/about">
                  <h2>About</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="footer-copyright-container"
        className="w-full bottom-0 text-center"
      >
        © Copyright 2024, Colorado Conference Connection LLC | Terms | Privacy
      </div>
    </div>
  );
}
