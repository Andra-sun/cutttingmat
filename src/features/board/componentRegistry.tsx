import { Contact } from "./contact/Contact";
import { Projects } from "./projects/Projects";
import { Tech } from "./techs/Tech";
import { TechBox } from "./techs/Techbox";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentRegistry: Record<string, React.ComponentType<any>> = {
  Projects,
  Contact,
  Tech,
  TechBox,
};