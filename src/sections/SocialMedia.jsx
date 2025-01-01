import React from "react";

function SocialMedia() {
  const socialMediaLinks = [
    {
      name: "GitHub",
      url: "https://github.com/birojisrinadh",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.665.24 2.9.118 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      ariaLabel: "GitHub (opens in a new tab)",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/birojisrinadh/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
      ariaLabel: "LinkedIn (opens in a new tab)",
    },
    {
      name: "GMail",
      url: "mailto:birojisrinadh@gmail.com",
      icon: (
        <svg
          viewBox="0 -31.5 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
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
                d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z"
                fill="currentColor"
              >
                {" "}
              </path>{" "}
              <path
                d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z"
                fill="currentColor"
              >
                {" "}
              </path>{" "}
              <polygon
                fill="currentColor"
                points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061"
              >
                {" "}
              </polygon>{" "}
              <path
                d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z"
                fill="currentColor"
              >
                {" "}
              </path>{" "}
              <path
                d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z"
                fill="currentColor"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
      ariaLabel: "GMail (opens in a new email tab)",
    },
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label={"Social Media"}>
      {socialMediaLinks.map((link) => (
        <li key={link.name} className="mr-5 shrink-0 text-xs">
          <a
            href={link.url}
            className="block text-slate-500 hover:text-slate-200 dark:hover:text-gray-800"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.ariaLabel}
            title={link.name}
          >
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
