import { default as cartoons } from "../../datas/dataset.json";
import { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
  id: string;
};

export function getOneCartoonById(
  _: unknown,
  args: GetOneCartoonByIdArgs,
): Cartoon {
  return cartoons.find((cartoon) => cartoon.id === +args.id) as Cartoon;
}
