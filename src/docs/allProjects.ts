import { foodExplorerObject } from "./foodExplorer";
import { movieTipObject } from "./movieTip";
import { autoWashObject } from "./autoWash";

import { capputeenoObject } from "./capputeeno";
import { AppDataProps } from "./appsProps";

export interface Project {
  name: string;
  image: string;
  data: AppDataProps;
}

export const projects: Project[] = [
  {
    name: "FoodExplorer",
    image: "/FoodExplorerImages/foodexplorer-login.gif",
    data: foodExplorerObject,
  },
  {
    name: "Movie Tips",
    image: "/MovieSelectorImages/filmSelector_gif.gif",
    data: movieTipObject,
  },
  {
    name: "Auto Wash",
    image: "/AutoWashImages/auto-wash.gif",
    data: autoWashObject,
  },
  {
    name: "Capputeeno",
    image: "/CapputeenoImages/capputeeno.gif",
    data: capputeenoObject,
  },
];
