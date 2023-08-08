import * as Yup from "yup";

export  const AddSubSchema = Yup.object({
  name: Yup.string(),
  price: Yup.number(),
  date: Yup.string()
});

export interface ISubForm {
  id: string,
  name: string,
  price: number,
  date: string,
  color: (typeof color)[number]
}

export const color: string[] = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3"]