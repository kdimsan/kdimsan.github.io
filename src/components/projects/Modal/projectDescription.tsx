import React from "react";
import styled from "styled-components";

type ProjectDescriptionProps = {
  description: string;
};

const Paragraph = styled.p`
  font-size: 1.5rem;
  text-align: justify;

  margin: 1rem 0;

  @media (min-width: 1024px) {
    font-size: 1.7rem;
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
