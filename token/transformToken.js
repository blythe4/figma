import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

const sd = new StyleDictionary({
  source: ["token/tokenBuild.json"],
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      buildPath: "src/styles/",
      files: [
        {
          destination: "globals.css",
          format: "css/variables",
        },
      ],
    },
  },
});

sd.buildAllPlatforms();
