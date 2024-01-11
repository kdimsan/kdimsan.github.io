export interface AppInfoProps {
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
  image: AppInfoProps;
  languages: AppInfoProps;
}
