import React from "react";

function Contact() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/35 px-6 py-5 backdrop-blur dark:bg-lightGray/35 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text dark:text-gray-800 lg:sr-only">
          Contact
        </h2>
      </div>
      <div>
        <h3 className="my-2 text-xl font-bold dark:text-gray-800 lg:text-2xl">
          Get In Touch
        </h3>
        <p className="my-2 text-sm leading-relaxed tracking-wide text-mint-800 dark:text-gray-700">
          Although I'm not currently exploring new opportunities, I welcome
          meaningful connections. Whether you have an inquiry, a collaboration
          proposal, or simply wish to say hello, feel free to reach out. I'll
          make every effort to respond thoughtfully.
        </p>
        <a
          href="mailto:birojisrinadh@gmail.com"
          target="_blank"
          aria-label="Mail To: birojisrinadh@gmail.com (opens in a new email tab)"
          rel="noreferrer noopener"
          className="relative mt-2 inline-block border px-4 py-2 text-sm hover:cursor-pointer hover:font-medium dark:border-gray-900 dark:text-gray-900"
        >
          Say Hello
          <span className="absolute inset-0 transition-all duration-75 ease-in-out hover:border-2 hover:border-current"></span>
        </a>
      </div>
    </>
  );
}

export default Contact;
