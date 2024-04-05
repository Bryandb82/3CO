import React from "react";
import Logo from "./Logo";
function LogoWithText({ className }: { className: string }) {
  return (
    <div id="home-logo-container" className={`${className}`}>
      <Logo cn="my-2 z-10" />
      <h1 className="titleNormal ml-8 z-15">
        <span className="titleBold">C</span>olorado{" "}
        <span className="titleBold">C</span>onference{" "}
        <span className="titleBold">C</span>onnection
      </h1>
    </div>
  );
}

export default LogoWithText;
