import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);
const sd = StyleDictionary.extend({
  source: ["theme/tokenBuild.json"],
  platforms: {
    tailwind: {
      transformGroup: "tokens-studio",
      buildPath: "",
      files: [
        {
          destination: "theme/tokenStudio.json",
          format: "json",
        },
      ],
    },
    css: {
      transformGroup: "tokens-studio",
      buildPath: "src/styles/",
      files: [
        {
          destination: "theme.css",
          format: "css/variables",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
