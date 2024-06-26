import StyleDictionaryModule from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: "all",
    source: ["theme/tokenStudio.json"], // 토큰 스튜디오에서 만들어준 json 파일 경로
    buildPath: "",
  }),
);

StyleDictionary.buildAllPlatforms();
