import {FC, PropsWithChildren, useMemo, useState} from 'react';
import {ISubForm} from "shared/AddSub/ui/types";
import {SubContext} from "../lib/SubContext";



export const SubProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<ISubForm[]>([]);
  const defaultProps = {value, setValue}
  return <SubContext.Provider value={defaultProps}>{children}</SubContext.Provider>;
};