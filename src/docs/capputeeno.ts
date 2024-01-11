import { AppDataProps, AppInfoProps } from "./appsProps";

const capputeenoImages: AppInfoProps = {
  image_src: ["/CapputeenoImages/capputeeno.gif"],
  image_description: ["Funcionality"],
  languages: ["React", "TypeScript", "Styled-Components", "Axios", "NextJS"],
};

export const capputeenoObject: AppDataProps = {
  title: "Capputeeno",
  admin: false,
  description:
    "​This application is a marketplace designed by Rocketseat. The project is an e-commerce platform for selling mugs and T-shirts, featuring the following functionalities: product filtering by category, searching by product name, and adding/removing products from the cart. The project design is available on Figma and was developed using Next.js and TypeScript, styled with styled-components. The cart is managed via localStorage and consumes its own GraphQL API. To start the project, run 'npm start' in the 'api' folder and 'npm run dev' in the 'capputeeno' folder.",
  image: capputeenoImages,
  languages: capputeenoImages,
  online: false,
  repository: "https://github.com/kdimsan/frontend-challenge",
};
