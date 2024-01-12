import React from "react";
import { Container } from "./styles";
import HeaderNavigation from "./headerNavigation";
import HeaderApresentation from "./headerApresentation";

export interface HeaderNavigationProps {
  activeSection: string | null;
}

export function Header({ activeSection }: HeaderNavigationProps) {
  return (
    <Container>
      <div className="header">
        <HeaderApresentation />

        <HeaderNavigation activeSection={activeSection} />
      </div>
    </Container>
  );
}
