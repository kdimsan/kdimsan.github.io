import React from "react";
import styled from "styled-components";

interface TitleProps {
  title: string;
  fontSize: string;
}

const TitleContainer = styled.h2<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  margin: 1rem 0 1.5rem 1rem;
`;

export default function Title({ title, fontSize }: TitleProps) {
  return <TitleContainer fontSize={fontSize}>{title}</TitleContainer>;
}
