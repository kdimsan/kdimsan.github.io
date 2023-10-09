import React, { useState } from "react";
import {
  Container,
  ModalContent,
  ModalText,
  ModalImage,
  LanguagesContainer,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { AppDataProps } from "../../../docs/foodExplorer";
import { ImagesHandler } from "../../imagesHandler";

export interface ModalProps {
  isOpen: boolean;
  setModalClose: () => void;
  data: AppDataProps;
}

export default function ProjectModal({
  isOpen,
  setModalClose,
  data,
}: ModalProps) {
  const [fadeOut, setFadeOut] = useState(false);

  const handlemodal = setModalClose;

  const handleFade = () => {
    setFadeOut(true);
    setTimeout(() => {
      handlemodal();
    }, 500);
  };

  if (isOpen) {
    return (
      <Container>
        <ModalContent
          className={fadeOut ? "fadeout" : ""}
          onAnimationEnd={() => setFadeOut(false)}
        >
          <div>
            <ModalImage>
              <ImagesHandler data={data} />
            </ModalImage>
            <ModalText>
              <h2>{data.title}</h2>
              <p>{data.description}</p>

              {data.online ? (
                <p>
                  This webpage is online{" "}
                  <a className="underline" href={data.link}>
                    here
                  </a>
                </p>
              ) : (
                <p>
                  This page is not available online, but fell free to git clone
                  it. All you need to do after is run the commands "npm install"
                  and "npm run dev".
                </p>
              )}

              {data.admin && (
                <span>
                  Fell free to create an account using a fake email address or
                  using admin account, email: admin@email.com / password: 123 .
                  If the application does not show any product, please wait and
                  refresh the page.
                </span>
              )}
              <LanguagesContainer>
                {data.languages.languages.map((language, index) => (
                  <div>
                    <span id={index.toString()}>{language}</span>
                  </div>
                ))}
              </LanguagesContainer>
              <button>
                <FaGithub />
                <a href={data.repository}>Repository</a>
              </button>
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
