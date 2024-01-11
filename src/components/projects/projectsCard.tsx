import React from "react";
import styled from "styled-components";
import { Project } from "../../docs/allProjects";
import { AppDataProps } from "../../docs/appsProps";

type ProjectsCardProps = {
  projectData: Project;
  handleModal: (projectData: AppDataProps) => void;
};

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 3px solid ${({ theme }) => theme.COLORS.PRIMARY_BORDER};
  border-radius: 5px;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(1px 1px 5px #000) brightness(0.5);
  }

  > img {
    width: 100%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  > span {
    width: 100%;

    display: flex;
    justify-content: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    font-weight: 500;

    background: ${({ theme }) => theme.COLORS.BG_PROJECTS};
  }
`;

export default function ProjectsCard({
  projectData,
  handleModal,
}: ProjectsCardProps) {
  return (
    <ProjectCard onClick={() => handleModal(projectData.data)}>
      <img src={projectData.image} alt="Project preview" />
      <span>{projectData.name}</span>
    </ProjectCard>
  );
}
