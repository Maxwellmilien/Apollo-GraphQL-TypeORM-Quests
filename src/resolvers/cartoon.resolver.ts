import { default as cartoons } from "../../datas/dataset.json";
import { Cartoon } from "../types/cartoon.type";

const datas = [...cartoons];

type GetOneCartoonByIdArgs = {
  id: string;
};

export function getCartoons(_: unknown, _args: unknown): Cartoon[] {
  return datas as Cartoon[];
}

export function getOneCartoonById(
  _: unknown,
  args: GetOneCartoonByIdArgs,
): Cartoon {
  return datas.find((cartoon) => cartoon.id === +args.id) as Cartoon;
}

export function createCartoon(
  _: unknown,
  args: { cartoon: Omit<Cartoon, "id"> },
): string {
  const id_cartoon = Date.now();
  const cartoon: Cartoon = { id: id_cartoon, ...args.cartoon };

  cartoon.personnages.forEach((c, i) => {
    c.id = i;
  });

  datas.push(cartoon);
  return "" + cartoon.id;
}

export function deleteCartoon(
  _: unknown,
  args: GetOneCartoonByIdArgs,
): string | null {
  const id = args.id;
  const index = datas.findIndex((d) => `${d.id}` === id);

  if (index !== -1) {
    datas.splice(index, 1);
    return id;
  } else {
    return null;
  }
}
