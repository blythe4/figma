import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const suit = localFont({
  src: "../../../public/fonts/SUIT-Variable.woff2",
  variable: "--font-suit",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-montserrat",
});
