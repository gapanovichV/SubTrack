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

export const color: string[] = ["#E50914", "#1DB954", "#107C10", "#5865F2", "#0070D1"]