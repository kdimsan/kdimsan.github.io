import React from "react";
import styled from "styled-components";

import { FiTool } from "react-icons/fi";
import { Tools } from "../../docs/toolsList";

const Container = styled.div`
  margin: 1rem 0 2rem;

  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    gap: 2.5rem 2rem;
    align-items: start;
    justify-content: center;

    list-style: none;

    margin: 2rem;

    > li {
      background: ${({ theme }) => theme.COLORS.BG_SKILLS};
      padding: 1rem;

      border-radius: 1rem;

      box-shadow: 4px 2px 4px ${({ theme }) => theme.COLORS.SHADOW_DARK},
        -5px -1px 7px ${({ theme }) => theme.COLORS.SHADOW_LIGHT};

      > span {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
        font-weight: 500;
      }
    }
  }
  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 0;

    > ul {
      grid-template-columns: repeat(auto-fill, 160px);
      justify-content: start;
      gap: 2.5rem;

      > li {
        cursor: default;
        transition: transform 0.35s ease-in, box-shadow 0.25s ease;

        &:hover {
          box-shadow: 5px 5px 0px ${({ theme }) => theme.COLORS.LIGHT_900},
            7px 9px 10px ${({ theme }) => theme.COLORS.LIGHT_900};
          transform: translate(-3px, -3px);
        }
      }
    }
  }
`;

export default function ToolsContent() {
  const tools = Tools;
  return (
    <Container>
      <h4>
        Tools <FiTool />
      </h4>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>
            <span>{tool}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
