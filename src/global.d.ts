declare module "*.module.scss" {
  const classNames: {
    [className: string]: string;
  };
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.webp";
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
