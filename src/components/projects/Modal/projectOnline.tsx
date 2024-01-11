import React from "react";
import styled from "styled-components";

type ProjectOnlineProps = {
  isOnline: boolean;
  link: string | undefined;
};

const Paragraph = styled.p`
  font-size: 1.5rem;
  text-align: justify;

  margin: 1rem 0;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_900};
    transition: filter 0.3s;

    &:hover {
      filter: drop-shadow(0 0 2px #fff);
      outline: none;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export default function ProjectOnline({ isOnline, link }: ProjectOnlineProps) {
  return (
    <div>
      {isOnline ? (
        <Paragraph>
          This webpage is online{" "}
          <a className="underline" href={link}>
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
