import React from "react";
import { Container } from "./styles";
import { AppDataProps } from "../../docs/foodExplorer";

interface ImagesHandler {
  data: AppDataProps;
}

export function ImagesHandler({ data }: ImagesHandler) {
  const images = data.image.image_src.map((image, i) => {
    const description = data.image.image_description[i];
    return (
      <figure key={i}>
        <img src={image} alt="Project image" />
        <figcaption>{description}</figcaption>
      </figure>
    );
  });

  return <Container>{images}</Container>;
}
