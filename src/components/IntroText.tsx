import React from "react";

function IntroText({ className }: any) {
  return (
    <div id="intro-text-container" className={`${className}`}>
      <p className="Text-Block">Conferencing, has never been easier.</p>
      <p className="Text-Block">
        Our experts take the guesswork out of what works.
      </p>
      <p className="Text-Block">
        Whether your business uses the industry standard conferencing platform{" "}
        <span className="Bold-Text">Microsoft Teams</span>, or is platform
        agnostic, relying on a <span className="Bold-Text">BYOD </span>(
        <span className="Bold-Text">B</span>ring{" "}
        <span className="Bold-Text">Y</span>our{" "}
        <span className="Bold-Text">O</span>wn{" "}
        <span className="Bold-Text">D</span>evice) philosophy.
      </p>
      <p className="Text-Block">
        <span className="Bold-Text">C</span>olorado{" "}
        <span className="Bold-Text">C</span>onference{" "}
        <span className="Bold-Text">C</span>onnection knows what&apos;s
        important to you
      </p>
    </div>
  );
}

export default IntroText;
