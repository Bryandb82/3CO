import React from "react";
import Logo from "./Logo";

function BrandBanner({ className }: { className?: string }) {
  return (
    <div id="brand-banner" className={`flex flex-row w-full ${className}`}>
      <Logo className={`w-54 m-8 `} />
      <h1 className="Title-Bold ml-8 z-15">
        <span className="Title-Bold">C</span>olorado{" "}
        <span className="Title-Bold">C</span>onference{" "}
        <span className="Title-Bold">C</span>onnection
      </h1>
    </div>
  );
}

export default BrandBanner;
