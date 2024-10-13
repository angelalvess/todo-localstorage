import { createContext } from "react";
import { TTodoContext } from "../types";

export const TodoContext = createContext<TTodoContext | undefined>(undefined);
