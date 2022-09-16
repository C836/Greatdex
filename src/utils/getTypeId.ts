import { TypesConfig } from "../types";
import { typesColors } from "../global";

export function getTypeId(type: keyof typeof TypesConfig) {
  const typeList = Object.keys(typesColors);

  const typeIndex = typeList.indexOf(type);

  return typeIndex;
}
