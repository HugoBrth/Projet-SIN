import clsx from "clsx";

interface Props {
  variant?: "primary" | "outline" | "disable" | "noborder" | "icon";
  size?: "large" | "medium" | "small";
  icon?: { icon: React.ElementType };
  iconTheme?: "primary" | "secondary";
  iconPosition?: "left" | "right";
  className?: "";
  children: React.ReactNode;
}

export const Button = ({
  size = "medium",
  className,
  variant = "primary",
  icon,
  iconTheme = "primary",
  iconPosition = "right",
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (size) {
    case "large":
      sizeStyles = " text-base px-[35px] py-[18px]";
      iconSize = 25;
      break;
    case "medium":
      sizeStyles = " text-small px-[30px] py-[14px]";
      iconSize = 20;
      break;
    case "small":
      sizeStyles = " text-pretitle px-[25px] py-[12px]";
      iconSize = 18;
      break;
  }

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-ongoing font-medium hover:opacity-70 text-white rounded-sm";
      break;
    case "outline":
      variantStyles =
        "border-2 font-medium hover:opacity-70 border-ongoing bg-none text-white rounded-sm";
      break;
    case "disable":
      variantStyles =
        "bg-ongoing font-medium text-white rounded-sm opacity-50 cursor-not-allowed";
      break;
    case "noborder":
      variantStyles = "font-medium bg-none hover:text-opacity-50 text-white";
      break;
  }

  return (
    <>
      <button className={clsx(variantStyles, iconSize, sizeStyles, className)}>
        {icon && variant === "icon" ? (
          <icon.icon size={iconSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-2")}>
            {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
          </div>
        )}
      </button>
    </>
  );
};
