import React from "react";

import { Container, Content } from "./styles";

import Spacer from "../spacer";
import ProjectsContainer from "./projectsContainer";
import Title from "../title";
import Disclaimer from "./disclaimer";

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
        <Disclaimer />
      </Content>
    </Container>
  );
}
