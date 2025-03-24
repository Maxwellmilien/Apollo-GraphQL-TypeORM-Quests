import { default as cartoons } from "../../datas/dataset.json";
import { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
  id: string;
};

export function getCartoons(_: unknown, _args: unknown): Cartoon[] {
  return cartoons as Cartoon[];
}

export function getOneCartoonById(
  _: unknown,
  args: GetOneCartoonByIdArgs,
): Cartoon {
  return cartoons.find((cartoon) => cartoon.id === +args.id) as Cartoon;
}

export function createCartoon(_: unknown, _args: { cartoon: Cartoon }): number {
  console.log(_args);
  return 1234;
}
