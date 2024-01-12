import React from "react";
import styled from "styled-components";

type ProjectTitleProps = {
  title: string;
};

const TitleConfig = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};
  font-family: ${({ theme }) => theme.FONT_FAMILY.NEUTRAL_BOLD};
  letter-spacing: 1.5px;
  margin: 2rem 0 0;
  align-self: center;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_4L};
  }
`;

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <div>
      <TitleConfig>{title}</TitleConfig>
    </div>
  );
}
