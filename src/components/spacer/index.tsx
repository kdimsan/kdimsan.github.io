import React from "react";
import styled from "styled-components";

const SpacerContent = styled.div`
  width: 100%;
  height: 6rem;
  margin-top: 11rem;
  margin-bottom: -30px;
  border-top: 3px solid #fff;
  border-radius: 40px;
`;
export default function Spacer() {
  return <SpacerContent></SpacerContent>;
}
