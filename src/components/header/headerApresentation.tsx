import React from "react";
import styled from "styled-components";

const Container = styled.div`
  > span {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_XS};
  }
  > h1 {
    font-family: ${({ theme }) => theme.FONT_FAMILY.WILD_WORLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};
    white-space: nowrap;
    line-height: 30px;
    letter-spacing: 1px;
  }
  > h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    letter-spacing: 1px;
  }

  @media (min-width: 1024px) {
    span {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_S};
    }
    > h1 {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_3L};
      white-space: nowrap;
    }

    > h2 {
      font-family: ${({ theme }) => theme.FONT_FAMILY.WILD_WORLD};
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    }
  }
`;

export default function HeaderApresentation() {
  return (
    <Container>
      <span>Hello, I'm</span>
      <h1>RICARDO ADAME SANT'ANA</h1>
      <h2>FULLSTACK DEVELOPER</h2>
    </Container>
  );
}
