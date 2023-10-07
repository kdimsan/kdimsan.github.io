import { useState, useEffect } from "react";
import { Container } from "./styles";

import { Header } from "../../components/header";
import { About } from "../../components/about";
import { Contact } from "../../components/contact";
import { Projects } from "../../components/projects";

export function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = document.querySelector("main")!.scrollTop + 400;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop;

          if (scrollPosition >= offset) {
            setActiveSection(section);
          }
        }
      }
    };

    document.querySelector("main")!.addEventListener("scroll", handleScroll);

    return () => {
      document
        .querySelector("main")!
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Header activeSection={activeSection} />
      <main>
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
