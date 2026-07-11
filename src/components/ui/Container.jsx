import clsx from "clsx";

const widths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[var(--container-max)]",
  xl: "max-w-7xl",
  full: "max-w-none",
};

const verticalSpacing = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-24 lg:py-32",
};

function Container({
  as: Component = "div",
  children,
  className,
  size = "lg",
  spacing = "none",
  bleed = false,
  ...props
}) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full",
        !bleed && "px-container",
        widths[size],
        verticalSpacing[spacing],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
