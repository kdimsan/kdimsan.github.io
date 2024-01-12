import React from "react";
import styled from "styled-components";

type ProjectDescriptionProps = {
  description: string;
};

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
  text-align: justify;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MODERNIST};

  margin: 1rem 0;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};
  }
`;
export default function ProjectDescription({
  description,
}: ProjectDescriptionProps) {
  return (
    <div>
      <Paragraph>{description}</Paragraph>
    </div>
  );
}
