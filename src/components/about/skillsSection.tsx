import React from "react";
import styled from "styled-components";
import DevelopmentSkills from "./developmentSkills";
import ToolsContent from "./tools";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_3L};

    display: flex;
    align-items: center;
    gap: 10px;

    > svg {
      width: 20px;
      height: 20px;
    }
  }
  @media (min-width: 1024px) {
    justify-content: space-around;
    flex-direction: row;
    margin: 3rem 5rem;

    gap: 10rem;

    > div {
      max-width: 70rem;
    }
  }

  @media (min-width: 1300px) {
    gap: 15rem;
  }
`;

export default function SkillsSection() {
  return (
    <Container>
      <DevelopmentSkills />
      <ToolsContent />
    </Container>
  );
}
