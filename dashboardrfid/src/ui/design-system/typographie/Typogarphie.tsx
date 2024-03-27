import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h2"
    | "h3"
    | "subtitle"
    | "body-base"
    | "body-bold"
    | "body-sm"
    | "pretitle"
    | "button-text"
    | "link";

  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "a"
    | "div";
  weight?: "regular" | "medium";
  className?: string;
  theme?: "";
  children: React.ReactNode;
}

export const Typographie = ({
  variant = "body-base",
  theme = "",
  weight = "regular",
  component: Component = "div",
  className,
  children,
}: Props) => {
  let variantStyles: string = "";
  let variantThemes: string = "";

  switch (variant) {
    case "display":
      variantStyles = "text-4xl";
      break;
    case "h2":
      variantStyles = "text-3xl";
      break;
    case "h3":
      variantStyles = "text-2xl";
      break;
    case "subtitle":
      variantStyles = "text-xl";
      break;
    case "body-base":
      variantStyles = "text-body";
      break;
    case "body-bold":
      variantStyles = "text-bold";
      break;
    case "body-sm":
      variantStyles = "text-small";
      break;
    case "pretitle":
      variantStyles = "text-pretitle";
      break;
    case "button-text":
      variantStyles = "text-button";
      break;
    case "link":
      variantStyles = "text-link underline cursor-pointer";
      break;
  }

  switch (theme) {
    case "":
      break;

    default:
      break;
  }

  return (
    <Component
      className={clsx(
        className,
        weight === "medium" && "font-medium",
        variantStyles,
        variantThemes
      )}
    >
      {children}
    </Component>
  );
};
