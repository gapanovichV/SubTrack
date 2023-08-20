import {createContext} from "react";
import {ISubForm} from "shared/AddSub/ui/types";


export interface SubContextProps {
  value?: ISubForm[];
  setValue?: (value: ISubForm[]) => void;
}

export const SubContext = createContext<SubContextProps>({});