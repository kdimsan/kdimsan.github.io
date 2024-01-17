import React from "react";
import styled from "styled-components";

const Container = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.FS_S};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MODERNIST};
  margin: 2rem 0;
  letter-spacing: 0.5px;
`;
export default function Disclaimer() {
  return (
    <Container>
      *Those are not all my projects. Here are some that, in my opinion,
      showcase my progress the best. For all my projects, please check out my
      Github.
    </Container>
  );
}
