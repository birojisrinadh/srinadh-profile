import React from "react";

function InPageNav() {
  const [activeLink, setActiveLink] = React.useState(null);
  const navLinks = ["about", "experience", "projects", "contact"];

  const handleClick = (link) => {
    setActiveLink(link);
  };

  React.useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.6, // Adjust this value as needed
    });

    navLinks.forEach((link) => {
      const section = document.getElementById(link);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navLinks]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`group flex items-center py-3 ${activeLink === link ? "active" : ""}`}
              onClick={() => handleClick(link)}
            >
              <span
                className={`nav-indicator mr-4 h-px ${activeLink === link ? "w-16 bg-slate-200 dark:bg-gray-800" : "w-8 bg-slate-600"} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transform-none dark:group-hover:bg-gray-800 dark:group-focus-visible:bg-gray-800`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${activeLink === link ? "text-slate-200 dark:text-gray-800" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200 dark:group-hover:text-gray-800 dark:group-focus-visible:text-gray-800`}
              >
                {link}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default InPageNav;
