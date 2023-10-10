import { AppDataProps, AppProps } from "./foodExplorer";

const movieTipsData: AppProps = {
  image_src: ["/MovieSelectorImages/filmSelector_gif.gif"],
  image_description: ["Functionality"],
  languages: ["React", "TypeScript", "Styled-Components", "Axios"],
};

export const movieTipObject: AppDataProps = {
  title: "Movie Tips",
  description:
    "This is a page that will present a random movie, doing a search on the 'themoviedb' API. The application was made with React and TypeScript, and the API connection with Axios.",
  admin: false,
  online: false,
  repository: "https://github.com/kdimsan/FilmSelector",
  image: movieTipsData,
  languages: movieTipsData,
};
