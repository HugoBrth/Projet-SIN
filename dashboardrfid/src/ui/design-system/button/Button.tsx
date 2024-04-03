import clsx from "clsx";

interface Props {
  variant?: "";
  size?: "";
  icon?: { icon: React.ElementType };
  iconTheme?: "primary" | "secondary";
  iconPosition?: "left" | "right";
  className?: "";
  children: React.ReactNode;
}

export const Button = ({
  size = "",
  className,
  variant = "",
  icon,
  iconTheme = "primary",
  iconPosition = "right",
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconsSize: number = 0;

  switch (size) {
    case "":
      break;

    default:
      break;
  }

  switch (variant) {
    case "":
      break;

    default:
      break;
  }

  return (
    <>
      <button
        className={clsx(
          className,
          variantStyles,
          iconsSize,
          sizeStyles,
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
