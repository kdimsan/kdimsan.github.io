import React, { useState } from "react";
import ProjectModal from "./Modal/projectModal";
import { Container, Content, ProjectForm } from "./styles";

import { foodExplorerObject } from "../../docs/foodExplorer";
import { movieTipObject } from "../../docs/movieTip";
import { autoWashObject } from "../../docs/autoWash";

export interface SectionProps {
  id: string;
  className: string;
}

export function Projects({ id, className }: SectionProps) {
  const [foodExplorerModal, setFoodExplorerModal] = useState(false);
  const [movieTipModal, setMovieTipModal] = useState(false);
  const [autoWashModal, setAutoWashModal] = useState(false);

  const handleFoodExplorerModal = () => {
    setFoodExplorerModal(!foodExplorerModal);
  };

  const handleMovieTipModal = () => {
    setMovieTipModal(!movieTipModal);
  };

  const handleAutoWashModal = () => {
    setAutoWashModal(!autoWashModal);
  };

  return (
    <Container className={className} id={id}>
      <h2>Projects</h2>
      <Content>
        <ul>
          <li>
            <ProjectForm onClick={handleFoodExplorerModal}>
              <img
                src="/FoodExplorerImages/foodexplorer-login.gif"
                alt="Project preview"
              />
              <span>FoodExplorer</span>
            </ProjectForm>
            <ProjectModal
              data={foodExplorerObject}
              isOpen={foodExplorerModal}
              setModalClose={handleFoodExplorerModal}
            />
          </li>
          <li>
            <ProjectForm onClick={handleMovieTipModal}>
              <img
                src="/MovieSelectorImages/filmSelector_gif.gif"
                alt="Project preview"
              />
              <span>Movie Tips</span>
            </ProjectForm>
            <ProjectModal
              data={movieTipObject}
              isOpen={movieTipModal}
              setModalClose={handleMovieTipModal}
            />
          </li>
          <li>
            <ProjectForm onClick={handleAutoWashModal}>
              <img src="/AutoWashImages/auto-wash.gif" alt="Project preview" />
              <span>Auto Wash</span>
            </ProjectForm>
            <ProjectModal
              data={autoWashObject}
              isOpen={autoWashModal}
              setModalClose={handleAutoWashModal}
            />
          </li>
        </ul>
      </Content>
    </Container>
  );
}
