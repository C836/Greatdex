import { TypesConfig } from "../types";
import { typesColors } from "../global";

export function getTypeId(type: keyof typeof TypesConfig) {
  if (type === "any") {
    return null;
  }

  const typeList = Object.keys(typesColors);

  const typeIndex = typeList.indexOf(type);

  return typeIndex;
}
