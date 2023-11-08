import React from "react";
import styled from "styled-components";
import { SectionProps } from "../projects";
import Spacer from "../spacer";
import ContactContent from "./contactContent";

const Container = styled.div``;

export function Contact({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <Spacer />
      <h2>Contact</h2>
      <ContactContent />
    </Container>
  );
}
