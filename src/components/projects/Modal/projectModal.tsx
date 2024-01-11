import React, { useRef, useState } from "react";
import { Container, ModalContent, ModalText, ModalImage } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { ImagesHandler } from "../../imagesHandler";
import { AppDataProps } from "../../../docs/appsProps";

import useOutsideClick from "../../../hooks/useOutsideElementClick";
import ProjectOnline from "./projectOnline";
import ProjectTitle from "./projectTitle";
import ProjectDescription from "./projectDescription";
import ProjectAdminFn from "./projectAdminFn";
import ProjectLanguages from "./projectLanguages";
import ProjectRepository from "./projectRepository";

interface ModalProps {
  isOpen: boolean;
  data: AppDataProps;
  handleClose: () => void;
}

export default function ProjectModal({
  isOpen,
  data,
  handleClose,
}: ModalProps) {
  const [fadeOut, setFadeOut] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  const handleFade = () => {
    setFadeOut(true);
    setTimeout(() => {
      isOpen = false;
      handleClose();
    }, 500);
  };

  useOutsideClick(divRef, handleFade);

  if (isOpen) {
    return (
      <Container>
        <ModalContent
          className={fadeOut ? "fadeout" : ""}
          onAnimationEnd={() => setFadeOut(false)}
        >
          <div ref={divRef}>
            <ModalImage>
              <ImagesHandler data={data} />
            </ModalImage>
            <ModalText>
              <ProjectTitle title={data.title} />
              <ProjectDescription description={data.description} />
              <ProjectOnline isOnline={data.online} link={data.link} />
              <ProjectAdminFn isAdminFn={data.admin} />
              <ProjectLanguages languages={data.languages.languages} />
              <ProjectRepository repository={data.repository} />
            </ModalText>
          </div>
          <button onClick={handleFade}>
            <AiOutlineCloseCircle />
          </button>
        </ModalContent>
      </Container>
    );
  }
  return null;
}
