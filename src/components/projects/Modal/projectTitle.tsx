import React from "react";
import styled from "styled-components";

type ProjectTitleProps = {
  title: string;
};

const TitleConfig = styled.h2`
  font-size: 2.2rem;
  margin: 2rem 0 0;
  align-self: center;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <div>
      <TitleConfig>{title}</TitleConfig>
    </div>
  );
}
