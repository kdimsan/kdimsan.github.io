export interface AppProps {
  image_src: string[];
  image_description: string[];
  languages: string[];
}

export interface AppDataProps {
  title: string;
  description: string;
  online: boolean;
  link?: string;
  repository: string;
  admin: boolean;
  image: AppProps;
  languages: AppProps;
}

export const foodexplorer_data: AppProps = {
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
    "Webpage created for the Rocketseat Explorer course. This is the final project, wich the development of its own database, done with Knex.js, the back-end using Javascript, Express and SQLite. Frontend was developed with ReactJS and the connection to the API is done using Axios. The application features functionalities such as user registration, user login, validation token, product registration, and displaying products stored in the database by category.",
  online: true,
  link: "https://ricardoadamefoodexplorer.netlify.app",
  repository: "https://github.com/kdimsan/front-end-FoodExplorer",
  admin: true,
  image: foodexplorer_data,
  languages: foodexplorer_data,
};
