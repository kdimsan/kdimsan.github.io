import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 2rem;
  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    text-align: justify;
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_900};
      transition: all 0.3s ease;
      filter: drop-shadow(0 0 1px #fff);
    }
  }

  @media (min-width: 1024px) {
    span {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
      > a {
        filter: none;
        &:hover {
          filter: drop-shadow(0 0 5px #fff);
        }
      }
    }
  }
`;

export default function ContactContent() {
  return (
    <Container>
      <span>
        Enter in contact with me by the email:{" "}
        <a target="_blank" href="mailto:ricardo.adame.santana@gmail.com">
          ricardo.adame.santana@gmail.com
        </a>{" "}
        or by my{" "}
        <a target="_blank" href="https://linkedin.com/in/ricardo-adame-santana">
          Linkedin profile.
        </a>{" "}
      </span>
    </Container>
  );
}
