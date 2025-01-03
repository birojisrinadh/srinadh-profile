import React from "react";
import sbPortfolio from "../assets/images/sbportfolio.png";

function Projects() {
  const arrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const githubIconSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecapap="round"
      strokeLinejoinoin="round"
      className="mr-2 h-5 w-5"
    >
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const projects = [
    {
      title: "Srinadh Portfolio Website (v1)",
      description:
        "An old personal portfolio site built with HTML, CSS and JavaScript which showcases my projects, skills, and experience.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://bairojisrinadh.github.io/sbportfolio",
      githubLink: "https://github.com/bairojisrinadh/sbportfolio",
      snapshot: sbPortfolio,
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/35 px-6 py-5 backdrop-blur dark:bg-lightGray/35 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text dark:text-gray-800 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-gray-300/20"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href={project.liveLink}
                      className="hover:text-sagaGreen focus-visible:text-sagaGreen group/link inline-flex items-baseline text-base font-medium leading-tight text hover:font-semibold focus-visible:font-semibold dark:text-gray-900"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="#"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <span className="inline-block">{arrowSVG}</span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal dark:text-gray-700">
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    className="group relative mt-4 inline-flex items-center pb-[2px] text-sm font-medium text hover:text-mint-100 focus-visible:text-mint-100 dark:text-gray-800"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    {githubIconSVG} Link
                    <span className="absolute inset-x-0 bottom-0 h-[1px] origin-left scale-x-0 transform bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </a>
                  <ul
                    className="flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    {project.techStack.map((tech, index) => (
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="bg-indigo/40 border-royalBlue flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text dark:bg-gray-800/10 dark:text-gray-800">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={project.snapshot}
                  alt={project.title}
                  loading="lazy"
                  width={200}
                  height={48}
                  decoding="async"
                  className="aspect-auto rounded border-2 border-slate-200/30 object-cover text-transparent transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;
