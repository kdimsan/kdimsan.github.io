import React from "react";
import styled from "styled-components";
import { Project } from "../../docs/allProjects";
import { AppDataProps } from "../../docs/appsProps";

type ProjectsCardProps = {
  projectData: Project;
  handleModal: (projectData: AppDataProps) => void;
};

const ProjectCard = styled.div`
  position: relative;
  width: 30rem;
  height: 18rem;
  border-radius: 1rem;
  z-index: 50;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 20px #141414, -5px -5px 20px #242424;
  transition: all 0.3s ease;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(1px 1px 5px #000) brightness(1.1);
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 29rem;
    height: 17rem;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 3px;
    overflow: hidden;
    outline: 2px solid ${({ theme }) => theme.COLORS.SILVER};

    > img {
      width: 100%;
      height: 100%;
    }
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 8s infinite ease-in-out;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

const ProjectName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  position: relative;
  top: 5px;

  z-index: 100;
  color: white;

  font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
  font-family: sans-serif;
  font-weight: 600;
`;

export default function ProjectsCard({
  projectData,
  handleModal,
}: ProjectsCardProps) {
  return (
    <div>
      <ProjectCard onClick={() => handleModal(projectData.data)}>
        <div className="bg">
          <img src={projectData.image} alt="Project image" />
        </div>
        <div className="blob"></div>
      </ProjectCard>
      <ProjectName>{projectData.name}</ProjectName>
    </div>
  );
}
