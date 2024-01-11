import React from "react";
import { Container } from "./styles";
import { SectionProps } from "../projects";

import Spacer from "../spacer";
import SkillsSection from "./skillsSection";
import Title from "../title";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
  margin: 0 2rem 3rem;

  text-align: justify;
`;

export function About({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <Spacer />
      <Title title="About me" fontSize="3rem" />
      <Paragraph>
        I have always been connected with computers, and decided since a young
        age that I would work with them. But my "first love" was hardware, so I
        started a degree in computer engineering at UERJ, Rio de Janeiro, in
        2017. However, over time I noticed that developing software was what I
        really enjoyed. So in 2019, I dropped computer engineering and started
        studying Data Analysis at University Estácio de Sá. Fast forward about 3
        years, I discovered frontend development through some friends, and in
        the final third of 2022 during my graduation, I decided to pursue a
        career in it. In 2023, I worked as a freelancer for a car wash company,
        where I developed a custom application for the company with the aim of
        streamlining and speeding up the registration and service process.
      </Paragraph>

      <Title fontSize="2.5rem" title="Skills" />
      <SkillsSection />
    </Container>
  );
}
