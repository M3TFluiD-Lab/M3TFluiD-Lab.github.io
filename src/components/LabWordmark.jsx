import React from "react";

const files = {
  brightgreen: "M3TFluiD_Lab_logo_brightgreen_transparent.svg",
  white: "M3TFluiD_Lab_logo_white_transparent.svg",
  labgreen: "M3TFluiD_Lab_logo_labgreen_transparent.svg",
  csugreen: "M3TFluiD_Lab_logo_CSUgreen_transparent.svg",
};

export default function LabWordmark({
  tone = "brightgreen",
  className = "",
  style = {},
  ...props
}) {
  // Use the exact SVG silhouette while inheriting the label's text color.
  if (tone === "current") {
    const mask = `url("${import.meta.env.BASE_URL}${files.white}")`;
    return (
      <span
        {...props}
        role="img"
        aria-label="M³TFluiD Lab"
        className={`inline-block ${className}`}
        style={{
          display: "inline-block",
          height: "1.4em",
          width: "7.252em",
          verticalAlign: "-0.22em",
          backgroundColor: "currentColor",
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          ...style,
        }}
      />
    );
  }
  const file = files[tone] || files.white;
  return (
    <img
      {...props}
      src={`${import.meta.env.BASE_URL}${file}`}
      alt="M³TFluiD Lab"
      className={`inline-block max-w-full ${className}`}
      style={{ height: "1.15em", width: "auto", verticalAlign: "-0.14em", ...style }}
    />
  );
}
