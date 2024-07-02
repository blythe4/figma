import React from "react";

interface Props {
  className?: string | undefined;
  label: string;
  type?: "high" | "medium" | "low" | "disable" | "text";
  width?: "full";
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fontSize?: "xs" | "sm" | "lg";
  line?: boolean;
  onClick: () => void;
}

export default function Button({
  className,
  label,
  type = "high",
  width,
  disabled,
  size = "sm",
  fontSize = "lg",
  line,
  onClick,
}: Props) {
  const typeClasses = {
    high: "bg-primary-purple_500 hover:bg-primary-purple_400 disabled:bg-secondary-gray_80 disabled:border-secondary-gray_100 text-white disabled:text-secondary-gray_200",
    medium:
      "border-primary-purple_500 hover:bg-secondary-gray_20 disabled:bg-secondary-gray_80 disabled:border-secondary-gray_100 text-primary-purple_500 disabled:text-secondary-gray_200",
    low: "border-secondary-gray_100 hover:bg-secondary-gray_20 disabled:bg-secondary-gray_80 disabled:border-secondary-gray_100 text-neutral-900 disabled:text-secondary-gray_200",
    disable:
      "border-primary-purple_500 hover:bg-primary-purple_50 disabled:bg-secondary-gray_80 disabled:border-secondary-gray_100 text-primary-purple_500 bg-secondary-gray_20 disabled:text-secondary-gray_200",
    text: "text-secondary-gray_200 hover:text-primary-purple_500",
  };

  const sizeClasses = {
    xs: "h-9 rounded-sm text-xs",
    sm: "h-9 md:h-10 rounded-sm text-xs md:text-sm",
    md: "h-10 md:h-12 rounded-sm md:rounded-md text-sm md:text-md",
    lg: "h-12 md:h-[52px] rounded-md",
    xl: "h-[52px] md:h-14 rounded-md md:text-lg",
  };

  const fontSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    lg: "text-base",
  };

  return (
    <button
      className={`${
        className !== undefined && className
      } felx items-center justify-center ${width === "full" && "w-f"} px-11 
      ${
        type !== "text"
          ? `border ${sizeClasses[size]}`
          : `${fontSizeClasses[fontSize]}`
      }
       ${typeClasses[type]} ${line && "underline"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
