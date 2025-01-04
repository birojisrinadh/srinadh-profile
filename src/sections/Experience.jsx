import React from "react";

function Experience() {
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

  const workExperience = [
    {
      doj: "JAN 2021",
      doe: null,
      jobTitle: "Lead Software Engineer",
      company: "Wellsfargo",
      location: "Hyderabad, India",
      languages: ["Java", "React", "JavaScript", "Spring Boot", "SQL"],
      client:
        "Wellsfargo - Corporate, Commercial and Investment Banking Technology",
      description:
        "Spearheaded the end-to-end modernization of the Fed Funds application, migrating it to the WF-RIA3 framework with React.js and transitioning to PCF cloud, all with a lean team. Delivered high-quality, timely results through strong cross-team collaboration and adherence to Agile best practices.",
      application: "CEO Fed Funds",
      appLink: "https://wellsoffice.ceo.wellsfargo.com/",
    },
    {
      doj: "DEC 2018",
      doe: "DEC 2020",
      jobTitle: "Software Development Specialist",
      company: "NTT Data",
      location: "Hyderabad, India",
      languages: ["Java", "JavaScript", "HTML", "CSS", "Spring Boot"],
      client: "The Hanover Insurance Group",
      description:
        "Played a key role in driving the success of critical features for The Hanover Insurance, consistently delivering high-quality, SonarQube-compliant solutions. Led and mentored the team, taking full ownership of projects and ensuring seamless execution to meet business goals and elevate overall performance.",
      application: "Hanover",
      appLink: "https://registration.hanover.com/",
    },
    {
      doj: "JUL 2017",
      doe: "NOV 2018",
      jobTitle: "Software Engineer II",
      company: "Wellsfargo",
      location: "Hyderabad, India",
      languages: [
        "Java",
        "Spring Boot",
        "Angular",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      client: "Wellsfargo - Wealth & Investment Management",
      description:
        "Led the delivery of high-quality solutions for Wells Fargo's Wealth & Investment Management division, focusing on retirement services. Recognized for timely code contributions, attention to detail, and seamless execution within Agile sprints.",
      application: "Customer Channel",
      appLink: null,
    },
    {
      doj: "AUG 2014",
      doe: "JUN 2017",
      jobTitle: "Associate Software Engineer",
      company: "DXC Technology",
      location: "Hyderabad, India",
      languages: ["Java", "Spring", "JSP", "Servlets", "HTML"],
      client: "Zurich Financial Services",
      description:
        "Contributed to code enhancements for Zurich Insurance's General Insurance claims applications (EDEC, P2000WP, EPNA). Recognized for delivering high-quality solutions on time, documenting test cases, and ensuring seamless execution of tasks within deadlines.",
      application: "EDEC",
      appLink: null,
    },
  ];

  const tenureString = ({ doj, doe }) => `${doj} - ${doe || "Present"}`;
  const tenureAriaLabel = ({ doj, doe }) => `${doj} to ${doe || "Present"}`;

  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/35 px-6 py-5 backdrop-blur dark:bg-lightGray/35 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text dark:text-gray-800 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {workExperience.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-gray-300/20"></div>
                <header
                  className="z-10 my-2 text-xs font-semibold uppercase tracking-wide text-mint-800 dark:text-gray-800 sm:col-span-2"
                  aria-label={tenureAriaLabel(experience)}
                >
                  {tenureString(experience)}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-mint-200">
                    <div>
                      <a
                        href={experience.appLink || "#"}
                        className="group/link flex flex-col items-start text-base font-medium leading-tight text hover:font-semibold hover:text-sagaGreen focus-visible:font-semibold focus-visible:text-sagaGreen dark:text-gray-900 md:flex-row md:items-baseline lg:flex-row lg:items-baseline"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="#"
                        onClick={(e) => {
                          if (!experience.appLink) e.preventDefault();
                        }}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {experience.jobTitle}, {experience.company}
                        </span>

                        {experience.appLink && (
                          <>
                            <span className="mx-3 hidden h-px w-3 bg-gray-100 pb-0.5 dark:bg-gray-800 md:block lg:block"></span>
                            <span className="inline-block pt-1.5">
                              {experience.application}
                              {arrowSVG}
                            </span>
                          </>
                        )}
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-wide text-mint-800 dark:text-gray-700">
                    {experience.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {experience.languages.map((language, index) => (
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full border-royalBlue bg-indigo/40 px-3 py-1 text-xs font-medium leading-5 text dark:bg-gray-800/10 dark:text-gray-800">
                          {language}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            href="/#"
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text hover:font-semibold hover:text-mint-100 focus-visible:font-semibold focus-visible:text-mint-100 dark:text-gray-900"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full <span className="inline-block">Résumé{arrowSVG}</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Experience;
