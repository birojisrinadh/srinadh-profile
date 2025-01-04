import React from "react";

function Footer() {
  const heartSVG = (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      className="inline-block h-3.5 w-4"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            fill="#F76D57"
            d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"
          ></path>{" "}
          <path
            fill="#F76D57"
            d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"
          ></path>{" "}
          <g>
            {" "}
            <path
              fill="#394240"
              d="M48,5c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0 c0,0-3.971-3.97-3.979-3.961C24.418,6.791,20.418,5,16,5C7.163,5,0,12.163,0,21c0,3.338,1.024,6.436,2.773,9 c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,57.609,30.977,58,32,58s2.047-0.391,2.828-1.172 c0,0,23.93-23.93,24.797-24.797S61.227,30,61.227,30C62.976,27.436,64,24.338,64,21C64,12.163,56.837,5,48,5z M58.714,29.977 c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56s-1.023-0.195-1.414-0.586 c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21C2,13.268,8.268,7,16,7 c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009 C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"
            ></path>{" "}
            <path
              fill="#394240"
              d="M48,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1 C58,15.478,53.522,11,48,11z"
            ></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-lg pb-4 text-sm text sm:pb-0">
      <p className="leading-relaxed tracking-wide text-mint-800 dark:text-gray-700">
        From code to pixels, brought to life with{" "}
        <a
          href="https://react.dev/"
          class="group relative font-medium text hover:text-mint-100 focus-visible:text-mint-100 dark:text-gray-800 dark:hover:text-gray-900 dark:focus-visible:text-gray-900"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="React (opens in a new tab)"
        >
          React
          <span class="absolute inset-x-0 bottom-0 h-[1px] origin-left scale-x-0 transform bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          class="group relative font-medium text hover:text-mint-100 focus-visible:text-mint-100 dark:text-gray-800 dark:hover:text-gray-900 dark:focus-visible:text-gray-900"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Tailwind CSS
          <span class="absolute inset-x-0 bottom-0 h-[1px] origin-left scale-x-0 transform bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </a>{" "}
        by Srinadh Biroji. Adapted with {heartSVG} from India -{" "}
        <span className="font-medium text-mint-600 dark:text-gray-700">
          {currentYear}
        </span>
      </p>
    </footer>
  );
}

export default Footer;
