import React from "react";
import styled from "styled-components";

type ProjectLanguagesProps = {
  languages: string[];
};
const Container = styled.div`
  margin-top: 2rem;
  > h5 {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
  }
`;

const LanguagesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 1rem;

  margin: 1.5rem 0 2rem;

  > div {
    background: ${({ theme }) => theme.COLORS.BG_SKILLS};
    border-radius: 5px;

    padding: 5px 10px;

    > span {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
      white-space: nowrap;
      cursor: default;
    }
  }
`;

export default function ProjectLanguages({ languages }: ProjectLanguagesProps) {
  return (
    <Container>
      <h5>Used Technologies</h5>
      <LanguagesContainer>
        {languages.map((language, index) => (
          <div>
            <span key={index}>{language}</span>
          </div>
        ))}
      </LanguagesContainer>
    </Container>
  );
}
