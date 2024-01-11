import React from "react";
import styled from "styled-components";
import { SectionProps } from "../projects";
import Spacer from "../spacer";
import ContactContent from "./contactContent";
import Title from "../title";

const Container = styled.div``;

export function Contact({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <Spacer />
      <Title title="Contact" fontSize="3rem" />
      <ContactContent />
    </Container>
  );
}
