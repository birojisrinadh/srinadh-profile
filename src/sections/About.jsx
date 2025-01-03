import React from "react";

function About() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/35 px-6 py-5 backdrop-blur dark:bg-lightGray/35 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text dark:text-gray-800 lg:sr-only">
          About
        </h2>
      </div>
      <div className="text-slate-400 dark:text-gray-800">
        <p className="mb-4">
          I'm a full-stack engineer passionate about building scalable,
          efficient, and user-centric applications that seamlessly integrate
          front-end aesthetics with back-end performance. I thrive at the
          intersection of technology and innovation, crafting solutions that are
          not only visually engaging but also architected for reliability,
          scalability, and maintainability.
        </p>
        <p className="mb-4">
          Currently, I'm a Lead Software Engineer at{" "}
          <span className="font-bold text dark:text-gray-900">Wellsfargo</span>,
          specializing in building robust and scalable applications. I
          contribute to the design, development, and maintenance of end-to-end
          solutions, ensuring seamless integration between the front-end and
          back-end while adhering to best practices for performance, security,
          and user experience.
        </p>
        <p className="mb-4">
          In the past, I've had the opportunity to build and maintain software
          across diverse environments — from{" "}
          <span className="font-bold text dark:text-gray-900">
            service-based
          </span>{" "}
          to <span className="font-bold text dark:text-gray-900">large</span>{" "}
          corporations and{" "}
          <span className="font-bold text dark:text-gray-900">
            financial sector
          </span>
          . More recently, I've been aligning my skills with industry trends,
          gaining experience with cloud platforms like{" "}
          <span className="font-bold text dark:text-gray-900">
            PCF, OpenShift, <span className="font-normal">and</span> Azure
          </span>{" "}
          to design, deploy, and manage scalable, resilient applications in
          modern cloud-native environments.
        </p>
        <p>
          In my spare time, I usually do reading, play table tennis or cricket,
          hang out with friends and family.
        </p>
      </div>
    </>
  );
}

export default About;
