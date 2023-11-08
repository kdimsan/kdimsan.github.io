import React from "react";
import { Container } from "./styles";
import HeaderNavigation from "./headerNavigation";

export interface HeaderNavigationProps {
  activeSection: string | null;
}

export function Header({ activeSection }: HeaderNavigationProps) {
  return (
    <Container>
      <div className="header">
        <div className="apresentation">
          <span>Hello, I'm</span>
          <h1>Ricardo Adame Sant'Ana</h1>
          <h2>Frontend Developer</h2>
        </div>

        <HeaderNavigation activeSection={activeSection} />
      </div>
    </Container>
  );
}
