import {FC, PropsWithChildren, useState} from 'react';
import {ISubForm} from "shared/AddSub/ui/types";
import {LOCAL_STORAGE_SUB_KEY, SubContext} from "../lib/SubContext";

const defaultList = (localStorage.getItem(LOCAL_STORAGE_SUB_KEY)) || '[]';

export const SubProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<ISubForm[]>(JSON.parse(defaultList));
  localStorage.setItem(LOCAL_STORAGE_SUB_KEY, JSON.stringify(value))
  const defaultProps = {value, setValue}
  return <SubContext.Provider value={defaultProps}>{children}</SubContext.Provider>;
};


