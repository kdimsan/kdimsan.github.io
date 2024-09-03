import React from "react";
import styled from "styled-components";

import { HiLink } from "react-icons/hi2";
import { FaFileDownload } from "react-icons/fa";
import { handleDownload } from "../../docs/handleDownload";

const Container = styled.div`
  margin: 0 2rem;

  span {
    gap: 3px;
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    text-align: justify;
    letter-spacing: 0.7px;

    > a {
      display: inline;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_900};
      overflow-wrap: break-word;
      margin: 0 3px 0 2.2rem;
      text-decoration: underline;

      transition: all 0.3s ease;
      filter: drop-shadow(0 0 1px #fff);

      cursor: pointer;

      > svg {
        position: absolute;
        margin: 3px 0 0 -18px;
      }
    }
  }

  @media (min-width: 1024px) {
    span {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
      a {
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
        Enter in contact with me by the email
        <a target="_blank" href="mailto:ricardo.adame.santana@gmail.com">
          <HiLink />
          ricardo.adame.santana@gmail.com
        </a>
        or by my
        <a target="_blank" href="https://linkedin.com/in/ricardo-adame-santana">
          <HiLink />
          Linkedin profile.
        </a>
        Also, check out my resume
        <a onClick={handleDownload}>
          <FaFileDownload />
          clicking here
        </a>
      </span>
    </Container>
  );
}
