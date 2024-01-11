import { AppDataProps, AppInfoProps } from "./appsProps";

const autoWashImages: AppInfoProps = {
  image_src: [
    "/AutoWashImages/auto-wash.gif",
    "/AutoWashImages/auto-wash-mobile.gif",
  ],
  image_description: ["Desktop", "Mobile"],
  languages: ["React", "TypeScript", "Styled-Components", "Axios"],
};

export const autoWashObject: AppDataProps = {
  title: "Auto Wash",
  admin: false,
  description:
    "This is an application that I developed for a car wash company. The app was built using React and it makes use of an API provided by the company. The final deployment is not available for viewing due to company restrictions.",
  image: autoWashImages,
  languages: autoWashImages,
  online: false,
  repository: "https://github.com/kdimsan/AATruck",
};
