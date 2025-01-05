import React from "react";

function WaterWaveEffect() {
  return (
    <svg
      viewBox="0 0 150 500"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0 hidden h-full w-[20%] lg:block 2xl:w-[30%]"
    >
      <path
        d="M50,0 C150,150 -50,350 50,500 L0,500 L0,0 Z"
        className="fill-fluidBlue dark:fill-goldenRod"
      >
        <animate
          attributeName="d"
          dur="6s"
          repeatCount="indefinite"
          values="
        M50,0 C150,150 -50,350 50,500 L0,500 L0,0 Z;
        M60,0 C100,150 0,350 60,500 L0,500 L0,0 Z;
        M40,0 C100,100 -20,400 40,500 L0,500 L0,0 Z;
        M50,0 C150,150 -50,350 50,500 L0,500 L0,0 Z
      "
        />
      </path>
    </svg>
  );
}

export default WaterWaveEffect;
