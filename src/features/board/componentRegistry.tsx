import { Contact } from "./contact/Contact"
import { Projects } from "./projects/Projects"

export const componentRegistry: Record<string, React.ComponentType> = {
    Projects, Contact
};