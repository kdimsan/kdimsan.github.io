import { AppDataProps, AppProps } from "./foodExplorer";

const capputeenoImages: AppProps = {
  image_src: ["/CapputeenoImages/capputeeno.gif"],
  image_description: ["Funcionality"],
  languages: ["React", "TypeScript", "Styled-Components", "Axios", "NextJS"],
};

export const capputeenoObject: AppDataProps = {
  title: "Capputeeno",
  admin: false,
  description:
    "This app is a fork from Rocketseat frontend challenge. Its made with Next.js and Typescript, styles with styled-components and consums its own API GraphQL. To run it, you have to first start the api by 'npm start'. The app has functionalities like filters by product type, price high-low, price low-high, best sellers and news. The shopping cart is allocated at the localstorage. This app was made for practicing porposes, and by now its not at the final version.",
  image: capputeenoImages,
  languages: capputeenoImages,
  online: false,
  repository: "https://github.com/kdimsan/frontend-challenge",
};
