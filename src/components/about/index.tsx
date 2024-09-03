import React from "react";

import { SectionProps } from "../projects";

import Spacer from "../spacer";
import SkillsSection from "./skillsSection";
import Title from "../title";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
  margin: 0 2rem 3rem;

  text-align: justify;
  letter-spacing: 0.7px;
`;
const Container = styled.div``;

export function About({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <Spacer />
      <Title title="About me" fontSize="3rem" />
      <Paragraph>
        I've always had a connection with computers and decided at a young age
        that I would work with them. Initially drawn to hardware, I started a
        degree in computer engineering at UERJ, Rio de Janeiro, in 2017. As time
        passed, I realized that my true passion lay in software development.
        Consequently, in 2019, I shifted gears, leaving computer engineering and
        delving into the study of Data Analysis at University Estácio de Sá.
        Fast forward three years, and I stumbled upon frontend development
        through friends. In a conversation with my brother, a backend developer,
        I was intrigued by his work. Recognizing the appeal of both frontend and
        backend development, I embarked on a quest to discover what truly
        resonated with me. This journey led me to the decision to become a
        full-stack developer, as it became evident that this path would empower
        me to elevate my applications in a more impactful manner. During the
        final third of my graduation year in 2022, I solidified my commitment to
        pursuing a career in full-stack development. In 2023, I had the
        opportunity to work as a freelancer for a car wash company. I developed
        a custom application aimed at streamlining and expediting the
        registration and service processes for the company.
      </Paragraph>

      <Title fontSize="2.5rem" title="Skills" />
      <SkillsSection />
    </Container>
  );
}
