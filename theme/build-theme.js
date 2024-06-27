import StyleDictionaryModule from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: "all",
    source: ["theme/tokenStudio.json"], // 토큰 스튜디오에서 만들어준 json 파일 경로
    buildPath: "",
    tailwind: {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/provider/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    },
  }),
);

StyleDictionary.buildAllPlatforms();
