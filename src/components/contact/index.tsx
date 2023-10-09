import React from "react";
import styled from "styled-components";
import { SectionProps } from "../projects";

const Container = styled.div`
  > div {
    margin: 0 1rem;
    > span {
      font-size: 14px;
      > a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_900};
        transition: all 0.3s ease;
        &:hover {
          filter: drop-shadow(0 0 5px #fff);
        }
      }
    }
  }
`;

export function Contact({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <h2>Contact</h2>
      <div>
        <span>
          Enter in contact with me by the email:{" "}
          <a href="mailto:ricardo.adame.santana@gmail.com">
            ricardo.adame.santana@gmail.com
          </a>{" "}
          or by my{" "}
          <a href="https://linkedin.com/in/ricardo-adame-santana">Linkedin</a>{" "}
          profile.
        </span>
      </div>
    </Container>
  );
}
