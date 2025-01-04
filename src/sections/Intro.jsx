import React from "react";
import InPageNav from "./InPageNav";
import SocialMedia from "./SocialMedia";

function Intro() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-lightGray dark:text-midnight sm:text-5xl">
          <a href="/">Srinadh Biroji</a>
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight dark:text-gray-800 sm:text-xl">
          Full Stack Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal tracking-normal text-slate-400 dark:text-gray-800">
          I design, build, and maintain seamless, scalable digital experiences
          from the server to the screen.
        </p>
        <InPageNav />
      </div>
      <SocialMedia />
    </header>
  );
}

export default Intro;
