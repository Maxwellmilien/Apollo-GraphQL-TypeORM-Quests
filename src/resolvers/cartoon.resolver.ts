import { default as cartoons } from "../../datas/dataset.json";
import { Cartoon } from "../types/cartoon.type";

export function getOneCartoonById(): Cartoon {
  return cartoons[0];
}
