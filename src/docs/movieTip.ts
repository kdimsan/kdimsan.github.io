import { AppDataProps, AppInfoProps } from "./appsProps";

const movieTipsData: AppInfoProps = {
  image_src: ["/MovieSelectorImages/filmSelector_gif.gif"],
  image_description: ["Functionality"],
  languages: ["React", "TypeScript", "Styled-Components", "Axios"],
};

export const movieTipObject: AppDataProps = {
  title: "Movie Tips",
  description:
    "This webpage functions by consuming 'themoviedb' API, presenting users with a randomly selected movie and its summary upon button activation. Built using React and TypeScript, the application establishes API connectivity through Axios.",
  admin: false,
  online: false,
  repository: "https://github.com/kdimsan/FilmSelector",
  image: movieTipsData,
  languages: movieTipsData,
};
