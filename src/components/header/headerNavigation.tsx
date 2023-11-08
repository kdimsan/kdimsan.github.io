import React from "react";
import styled from "styled-components";
import { HeaderNavigationProps } from ".";
import HeaderLinks from "./headerLinks";

const Container = styled.nav`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 2.4rem;

  > ul {
    display: flex;

    gap: 1.5rem;

    list-style: none;

    > li {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
      font-weight: 500;
      transition: filter 0.2s ease-in-out;

      > a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_900};

        position: relative;
        display: inline-block;

        > .underline {
          position: relative;
          display: inline-block;
        }

        > .underline::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transform: scaleX(0);
          transform-origin: bottom left;
          transition: transform 0.3s ease-in-out;
        }

        > .underline:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        > .active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transform: scaleX(0);
          transform-origin: bottom left;
          transition: transform 0.3s ease-in-out;
        }

        > .active {
          &::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }

      &:hover {
        filter: drop-shadow(0 0 2px #dbdbdb);

        cursor: pointer;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: end;
    margin-top: 0;

    > ul {
      margin: auto;
      li {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};
      }
    }
  }
`;

export default function HeaderNavigation({
  activeSection,
}: HeaderNavigationProps) {
  return (
    <Container>
      <ul>
        <li>
          <a href="#about">
            <span
              className={`underline ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              About
            </span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <span
              className={`underline ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              Projects
            </span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span
              className={`underline ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              Contact
            </span>
          </a>
        </li>
      </ul>
      <HeaderLinks />
    </Container>
  );
}
