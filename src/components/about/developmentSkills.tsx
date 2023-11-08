import React from "react";
import styled from "styled-components";

import { DiHtml5, DiNodejsSmall, DiReact, DiCss3 } from "react-icons/di";
import { TbBrandTypescript, TbBrandJavascript } from "react-icons/tb";
import { FaDev } from "react-icons/fa6";

const Container = styled.div`
  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 0 1.5rem;
    justify-content: center;

    margin-top: 1rem;
    list-style: none;

    @media (min-width: 320px) and (max-width: 1023px) {
      .item {
        &.react {
          background: #01dbfc;
        }
        &.typescript {
          background: #087ece;
        }
        &.javascript {
          background: rgba(247, 224, 24, 0.9);
        }
        &.css {
          background: #004ce8;
        }
        &.html5 {
          background: #ff5225;
        }
        &.nodejs {
          background: #58a149;
        }
      }
    }

    > li {
      width: 10rem;
      height: 10rem;
      max-width: 10rem;
      max-height: 10rem;
      flex-grow: 1;
      flex-basis: 100px;
      margin: 1rem;
      display: inline-block;
      background: ${({ theme }) => theme.COLORS.BG_SKILLS};
      border-radius: 50%;
      box-shadow: 3px 3px 6px ${({ theme }) => theme.COLORS.SHADOW_DARK},
        -3px -3px 10px ${({ theme }) => theme.COLORS.SHADOW_LIGHT};
      position: relative;

      > svg {
        width: 5rem;
        height: 5rem;
        position: absolute;
        top: 24px;
        left: 25px;
      }
    }

    @media (min-width: 320px) and (max-width: 550px) {
      > li {
        width: 9rem;
        height: 9rem;
        max-width: 9rem;
        max-height: 9rem;

        > svg {
          width: 4.5rem;
          height: 4.5rem;
          position: absolute;
          top: 24px;
          left: 24px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    ul {
      grid-template-columns: repeat(auto-fill, 110px);
      gap: 0.5rem 2rem;

      justify-content: start;
    }

    width: 40%;

    .item {
      transition: transform 0.35s ease-in, box-shadow 0.25s ease;
      &:hover {
        &.react {
          background: #01dbfc;
        }
        &.typescript {
          background: #087ece;
        }
        &.javascript {
          background: rgba(247, 224, 24, 0.9);
        }
        &.css {
          background: #004ce8;
        }
        &.html5 {
          background: #ff5225;
        }
        &.nodejs {
          background: #58a149;
        }
        box-shadow: 9px 9px 0px rgba(255, 255, 255, 0.87),
          12px 12px 14px rgba(255, 255, 255, 0.87);
        transform: translate(-5px, -5px);
      }
    }
  }

  @media (min-width: 1300px) {
    padding-right: 5rem;
  }
`;

export default function DevelopmentSkills() {
  return (
    <Container>
      <h4>
        Development <FaDev />
      </h4>
      <ul>
        <li className="react item">
          <DiReact />
        </li>
        <li className="typescript item">
          <TbBrandTypescript />
        </li>
        <li className="javascript item">
          <TbBrandJavascript />
        </li>
        <li className="css item">
          <DiCss3 />
        </li>
        <li className="html5 item">
          <DiHtml5 />
        </li>
        <li className="nodejs item">
          <DiNodejsSmall />
        </li>
      </ul>
    </Container>
  );
}
