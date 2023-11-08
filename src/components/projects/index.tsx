import React from "react";

import { Container, Content } from "./styles";

import Spacer from "../spacer";
import ProjectsContainer from "./projectsContainer";

export interface SectionProps {
  id: string;
  className: string;
}

export function Projects({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <Spacer />
      <h2>Projects</h2>
      <Content>
        <ProjectsContainer />
      </Content>
    </Container>
  );
}
