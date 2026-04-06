import { Contact } from "./contact/Contact";
import { FolderCard } from "./projects/FolderCard";
import { Projects } from "./projects/Projects";
import { Tech } from "./techs/Tech";
import { TechBox } from "./techs/Techbox";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentRegistry: Record<string, React.ComponentType<any>> = {
  Projects,
  ProjectFolder: FolderCard,
  Contact,
  Tech,
  TechBox,
};