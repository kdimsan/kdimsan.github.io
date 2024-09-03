import React from "react";
import styled from "styled-components";
import { FaGlobe } from "react-icons/fa";

type ProjectOnlineProps = {
  isOnline: boolean;
  link: string | undefined;
};

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
  text-align: justify;

  margin: 1rem 0;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_900};
    transition: filter 0.3s;

    > svg {
      margin: 0 2px 0 3px;
    }

    &:hover {
      filter: drop-shadow(0 0 2px #fff);
      outline: none;
    }
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
  }
`;

export default function ProjectOnline({ isOnline, link }: ProjectOnlineProps) {
  return (
    <div>
      {isOnline ? (
        <Paragraph>
          This webpage is online{" "}
          <a className="underline" target="_blank" href={link}>
            <FaGlobe />
            here
          </a>
        </Paragraph>
      ) : (
        <Paragraph>
          This page is not available online, but fell free to git clone it. All
          you need to do after is run the commands "npm install" and "npm run
          dev".
        </Paragraph>
      )}
    </div>
  );
}
