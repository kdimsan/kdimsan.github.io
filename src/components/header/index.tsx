import React, { useState, useEffect } from "react";
import { Container, DesktopHeader } from "./styles";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

interface HeaderProps {
  activeSection: string | null;
}

export function Header({ activeSection }: HeaderProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  });

  return (
    <Container>
      <DesktopHeader>
        <div className="apresentation">
          <span>Hello, I'm</span>
          <h1>Ricardo Adame Sant'Ana</h1>
          <h2>Full-stack Developer.</h2>
        </div>
        {windowWidth >= 1024 && (
          <nav>
            <ul>
              <li>
                <a href="#about">
                  <span
                    className={`underline ${
                      activeSection === "about" ? "active" : ""
                    }`}
                  >
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#projects">
                  <span
                    className={`underline ${
                      activeSection === "projects" ? "active" : ""
                    }`}
                  >
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span
                    className={`underline ${
                      activeSection === "contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}

        <div className="links">
          <ul>
            <li>
              <a href="https://github.com/kdimsan" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ricardo-adame-santana/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:ricardo.adame.santana@gmail.com">
                <FaRegEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </DesktopHeader>
    </Container>
  );
}
