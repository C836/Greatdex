import { generationsRange } from "../global";
import { GenerationsConfig } from "../types/utils";

export function checkGenerationId(id: number, generation: keyof typeof GenerationsConfig) {
  const currentGenerationRange = generationsRange[generation];

  const start = currentGenerationRange[0];
  const end = currentGenerationRange[1];

  if (id >= start && id <= end) {
    return true;
  } else {
    return false;
  }
}
