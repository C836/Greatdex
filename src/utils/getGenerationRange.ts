import { generationsRange } from "../global";
import { GenerationsConfig } from "../types/utils";

export function getGenerationRange(generation: keyof typeof GenerationsConfig) {
  const currentGenerationRange = generationsRange[generation];

  const start = currentGenerationRange[0];
  const end = currentGenerationRange[1];

  return {
    start,
    end,
  };
}
