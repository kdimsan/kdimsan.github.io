import React, { useState } from "react";
import styled from "styled-components";
import ProjectModal from "./Modal/projectModal";

import { projects } from "../../docs/allProjects";
import { AppDataProps } from "../../docs/appsProps";
import ProjectsCard from "./projectsCard";

const Container = styled.ul``;

export default function ProjectsContainer() {
  const [handleModal, setHandleModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<AppDataProps | null>(
    null
  );

  const allProjects = projects;

  const handleModalState = (projectData: AppDataProps) => {
    setHandleModal(!handleModal);
    setSelectedProject(projectData);
  };

  const handleCloseModal = () => {
    setHandleModal(!handleModal);
    setSelectedProject(null);
  };

  return (
    <Container>
      {allProjects.map((project, index) => (
        <li key={index}>
          <ProjectsCard
            projectData={project}
            handleModal={() => handleModalState(project.data)}
          />
        </li>
      ))}
      {selectedProject && (
        <ProjectModal
          data={selectedProject}
          isOpen={handleModal}
          handleClose={handleCloseModal}
        />
      )}
    </Container>
  );
}
