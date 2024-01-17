import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { handleDownload } from "../../docs/handleDownload";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  > ul {
    list-style: none;

    display: flex;

    gap: 1rem;

    > li {
      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #eee;

        transition: all 0.3s ease;

        &:hover {
          filter: drop-shadow(0 0 3px #fff);
          transform: translate(-2px, -2px);
        }
      }
    }
  }

  @media (min-width: 1024px) {
    svg {
      width: 2rem !important;
      height: 2rem !important;
    }
  }
`;

export default function HeaderLinks() {
  return (
    <Container>
      <ul>
        <li>
          <a href="https://github.com/kdimsan" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/ricardo-adame-santana/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:ricardo.adame.santana@gmail.com">
            <FaRegEnvelope />
          </a>
        </li>
        <li>
          <button onClick={handleDownload}>
            <FaFileDownload />
          </button>
        </li>
      </ul>
    </Container>
  );
}
