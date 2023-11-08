import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { Header } from "../../components/header";
import { About } from "../../components/about";
import { Contact } from "../../components/contact";
import { Projects } from "../../components/projects";

export function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY + 600;
      const currentScrollPosition = window.scrollY;

      if (prevScrollPos < currentScrollPosition && window.innerWidth < 1024) {
        document.querySelector(".header")?.classList.add("hidden");
      } else {
        document.querySelector(".header")?.classList.remove("hidden");
      }

      setPrevScrollPos(currentScrollPosition);

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offset = element.offsetTop;

          if (scrollPosition > offset) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Container>
      <Header activeSection={activeSection} />
      <main id="main">
        <About
          className={activeSection === "about" ? "active" : ""}
          id="about"
        />

        <Projects
          className={activeSection === "projects" ? "active" : ""}
          id="projects"
        />
        <Contact
          className={activeSection === "contact" ? "active" : ""}
          id="contact"
        />
      </main>
    </Container>
  );
}
