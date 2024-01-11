import { AppDataProps, AppInfoProps } from "./appsProps";

export const foodexplorer_data: AppInfoProps = {
  image_src: [
    "/FoodExplorerImages/foodexplorer-login.gif",
    "/FoodExplorerImages/foodexplorer-create.gif",
    "/FoodExplorerImages/foodexplorer-edit.gif",
  ],
  image_description: ["Login", "Create product", "Edit product"],
  languages: [
    "React",
    "JavaScript",
    "Styled-Components",
    "Axios",
    "Express",
    "SQLite",
    "Knex",
  ],
};

export const foodExplorerObject: AppDataProps = {
  title: "Food Explorer",
  description:
    "This application was developed as the final challenge in Rocketseat's Explorer course. It underwent full development, with the backend built using JavaScript, Express, and SQL, while the frontend was crafted with React and JavaScript. Additionally, it established a connection to its own API using Axios. The application includes user registration and login functionality, along with an 'admin' feature that enables the creation and editing of dishes.",
  online: true,
  link: "https://ricardoadamefoodexplorer.netlify.app",
  repository: "https://github.com/kdimsan/front-end-FoodExplorer",
  admin: true,
  image: foodexplorer_data,
  languages: foodexplorer_data,
};
