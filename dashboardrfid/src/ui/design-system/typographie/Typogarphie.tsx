import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h2"
    | "h3"
    | "h4"
    | "subtitle"
    | "body-base"
    | "body-bold"
    | "body-sm"
    | "pretitle"
    | "button-text"
    | "tiny"
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
  theme?:
    | "primary"
    | "secondary"
    | "tercery"
    | "ongoing"
    | "success"
    | "error"
    | "accent1"
    | "accent2"
    | "grey"
    | "white";
  children: React.ReactNode;
}

export const Typographie = ({
  variant = "body-base",
  theme = "white",
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
    case "h4":
      variantStyles = "text-2.5xl";
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
    case "tiny":
      variantStyles = "text-tiny";
      break;
  }

  switch (theme) {
    case "primary":
      variantThemes = "text-primary-200";
      break;
    case "secondary":
      variantThemes = "text-secondary-400";
      break;
    case "tercery":
      variantThemes = "text-tercery";
      break;
    case "ongoing":
      variantThemes = "text-ongoing";
      break;
    case "success":
      variantThemes = "text-success";
      break;
    case "error":
      variantThemes = "text-error";
      break;
    case "accent1":
      variantThemes = "text-accent1";
      break;
    case "accent2":
      variantThemes = "text-accent2";
      break;
    case "grey":
      variantThemes = "text-grey";
      break;
    case "white":
      variantThemes = "text-white";
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
