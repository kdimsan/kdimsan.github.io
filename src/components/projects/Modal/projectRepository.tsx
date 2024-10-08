import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

type ProjectRepositoryProps = {
  repository: string;
};

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 5px 0;

  font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};

  transition: all 0.3s;

  &:hover {
    transform: scale(1.15);
    filter: drop-shadow(0 0 3px #fff);
  }

  > svg {
    width: 2rem;
    height: 2rem;
    color: #fff;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_900};
    letter-spacing: 0.7px;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
  }
`;

export default function ProjectRepository({
  repository,
}: ProjectRepositoryProps) {
  return (
    <Container>
      <FaGithub />
      <a target="_blank" href={repository}>
        Repository
      </a>
    </Container>
  );
}
