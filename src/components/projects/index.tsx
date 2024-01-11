import React from "react";

import { Container, Content } from "./styles";

import Spacer from "../spacer";
import ProjectsContainer from "./projectsContainer";
import Title from "../title";

export interface SectionProps {
  id: string;
  className: string;
}

export function Projects({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <Spacer />
      <Title title="Projects" fontSize="3rem" />
      <Content>
        <ProjectsContainer />
      </Content>
    </Container>
  );
}
