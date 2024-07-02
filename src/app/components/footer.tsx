import React from "react";
import { montserrat } from "@/utils/fonts/fonts";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <p className={`${montserrat.variable} font-montserrat text-2xl`}>
        070-1234-1234
      </p>
    </footer>
  );
};
