import React from "react";

export default function SideProgressBar(
  event: React.SyntheticEvent<HTMLDivElement, WheelEvent>
) {
  return (
    <div
      id="side-progress-bar-container"
      className="h-full w-20 bg-content"
    ></div>
  );
}
