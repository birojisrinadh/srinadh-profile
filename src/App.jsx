import MouseFollow from "./components/MouseFollow";
import WaterWaveEffect from "./components/WaterWaveEffect";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="relative">
      <MouseFollow />
      <WaterWaveEffect />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Intro />
          <main id="content" className="pt-24 lg:w-[60%] lg:py-24">
            <section
              id="about"
              className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <About />
              <span className="absolute inset-x-48 -bottom-16 hidden h-1 scale-x-50 rounded-full bg-indigo/10 dark:bg-gray-800/10 md:block"></span>
            </section>
            <section
              id="experience"
              className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <Experience />
              <span className="absolute inset-x-48 -bottom-16 hidden h-1 scale-x-50 rounded-full bg-indigo/10 dark:bg-gray-800/10 md:block"></span>
            </section>
            <section
              id="projects"
              className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Projects created by me"
            >
              <Projects />
              <span className="absolute inset-x-48 -bottom-16 hidden h-1 scale-x-50 rounded-full bg-indigo/10 dark:bg-gray-800/10 md:block"></span>
            </section>
            <section
              id="contact"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Contact me"
            >
              <Contact />
            </section>
            <Footer />
          </main>
        </div>
      </div>
      <button
        className="fixed right-6 top-14 z-30 text backdrop-blur dark:text-gray-900 md:right-8 md:top-16 lg:right-10 lg:top-8 2xl:right-32 2xl:top-20"
        onClick={() => document.documentElement.classList.toggle("dark")}
      >
        <svg
          fill="currentColor"
          className="h-6 w-6 hover:text-lightGray dark:hover:text-midnight md:h-8 md:w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12"
          viewBox="0 0 35 35"
          data-name="Layer 2"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default App;
