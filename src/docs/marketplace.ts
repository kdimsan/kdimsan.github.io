import { AppDataProps, AppProps } from "./foodExplorer";

const marketplaceImages: AppProps = {
  image_src: ["/MarketplaceImages/marketplace.gif"],
  image_description: ["Funcionality"],
  languages: ["React", "TypeScript", "Styled-Components", "Axios", "NextJS"],
};

export const marketplaceObject: AppDataProps = {
  title: "Marketplace",
  admin: false,
  description:
    "This is my personal develped marketplace.It has its own API, that can be started by typing 'npm start', filter options by size, color and price range. The bag uses a hook so its easy for the user to clean. This was developed just for practicing, and its not at the final version.",
  image: marketplaceImages,
  languages: marketplaceImages,
  online: false,
  repository: "https://github.com/kdimsan/frontend-challenge",
};
