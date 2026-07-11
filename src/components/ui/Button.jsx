import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary:
    "bg-ink-50 text-void-950 shadow-glow hover:bg-white focus-visible:outline-ink-50",
  secondary:
    "border border-white/15 bg-white/[0.07] text-ink-50 shadow-soft backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.11] focus-visible:outline-cyber-400",
  ghost:
    "text-ink-100 hover:bg-white/[0.08] focus-visible:outline-cyber-400",
  accent:
    "accent-gradient text-void-950 shadow-violet hover:saturate-125 focus-visible:outline-lime-300",
};

const sizes = {
  sm: "h-10 gap-2 rounded-md px-4 text-sm",
  md: "h-12 gap-2.5 rounded-lg px-5 text-sm",
  lg: "h-14 gap-3 rounded-xl px-6 text-base",
};

const buttonHover = { y: -2 };
const buttonTap = { scale: 0.98 };
const buttonTransition = { type: "spring", stiffness: 420, damping: 30 };

function Button({
  as: Component = "button",
  children,
  className,
  variant = "primary",
  size = "md",
  iconLeft: IconLeft,
  iconRight: IconRight,
  isLoading = false,
  disabled = false,
  type,
  ...props
}) {
  const isButton = Component === "button";
  const isDisabled = disabled || isLoading;
  const { onClick, tabIndex, ...restProps } = props;

  function handleClick(event) {
    if (!isButton && isDisabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  }

  return (
    <motion.div
      className="inline-flex"
      whileHover={isDisabled ? undefined : buttonHover}
      whileTap={isDisabled ? undefined : buttonTap}
      transition={buttonTransition}
    >
      <Component
        className={clsx(
          "group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-semibold tracking-normal",
          "transition-[background,border-color,color,box-shadow,filter] duration-300",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          "disabled:pointer-events-none disabled:opacity-55",
          sizes[size],
          variants[variant],
          className,
        )}
        disabled={isButton ? isDisabled : undefined}
        aria-disabled={!isButton && isDisabled ? true : undefined}
        aria-busy={isLoading ? true : undefined}
        tabIndex={!isButton && isDisabled ? -1 : tabIndex}
        onClick={handleClick}
        type={isButton ? type || "button" : undefined}
        {...restProps}
      >
        {isLoading && (
          <span
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        )}
        {!isLoading && IconLeft && <IconLeft className="size-4 shrink-0" aria-hidden="true" />}
        <span className="relative z-10">{children}</span>
        {!isLoading && IconRight && <IconRight className="size-4 shrink-0" aria-hidden="true" />}
      </Component>
    </motion.div>
  );
}

export default Button;
