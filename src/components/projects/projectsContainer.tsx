import React, { useState } from "react";
import styled from "styled-components";
import ProjectModal from "./Modal/projectModal";
import { foodExplorerObject } from "../../docs/foodExplorer";
import { movieTipObject } from "../../docs/movieTip";
import { autoWashObject } from "../../docs/autoWash";
import { ProjectForm } from "./styles";
import { capputeenoObject } from "../../docs/capputeeno";
import { marketplaceObject } from "../../docs/marketplace";

const Container = styled.ul``;
export default function ProjectsContainer() {
  const [foodExplorerModal, setFoodExplorerModal] = useState(false);
  const [movieTipModal, setMovieTipModal] = useState(false);
  const [autoWashModal, setAutoWashModal] = useState(false);
  const [capputeenoModal, setCapputeenoModal] = useState(false);
  const [marketplaceModal, setMarketplaceModal] = useState(false);

  const handleFoodExplorerModal = () => {
    setFoodExplorerModal(!foodExplorerModal);
  };

  const handleMovieTipModal = () => {
    setMovieTipModal(!movieTipModal);
  };

  const handleAutoWashModal = () => {
    setAutoWashModal(!autoWashModal);
  };

  const handleCapputeenoModal = () => {
    setCapputeenoModal(!capputeenoModal);
  };

  const handleMarketplaceModal = () => {
    setMarketplaceModal(!marketplaceModal);
  };

  return (
    <Container>
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
      <li>
        <ProjectForm onClick={handleCapputeenoModal}>
          <img src="/CapputeenoImages/capputeeno.gif" alt="Project preview" />
          <span>Capputeeno</span>
        </ProjectForm>
        <ProjectModal
          data={capputeenoObject}
          isOpen={capputeenoModal}
          setModalClose={handleCapputeenoModal}
        />
      </li>
      <li>
        <ProjectForm onClick={handleMarketplaceModal}>
          <img src="/MarketplaceImages/marketplace.gif" alt="Project preview" />
          <span>Marketplace</span>
        </ProjectForm>
        <ProjectModal
          data={marketplaceObject}
          isOpen={marketplaceModal}
          setModalClose={handleMarketplaceModal}
        />
      </li>
    </Container>
  );
}
