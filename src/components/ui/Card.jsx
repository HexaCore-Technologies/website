import { motion } from "framer-motion";
import clsx from "clsx";

const paddings = {
  none: "",
  sm: "p-4 sm:p-5",
  md: "p-5 sm:p-6",
  lg: "p-6 sm:p-8",
};

const tones = {
  default: "premium-surface",
  quiet: "border border-white/10 bg-white/[0.045]",
  elevated: "premium-surface shadow-violet",
};

const MotionArticle = motion.article;
const cardHover = { y: -6 };
const cardTransition = { type: "spring", stiffness: 260, damping: 24 };

function Card({
  children,
  className,
  padding = "md",
  tone = "default",
  interactive = false,
  ...props
}) {
  return (
    <MotionArticle
      className={clsx(
        "relative overflow-hidden rounded-2xl text-ink-100",
        tones[tone],
        paddings[padding],
        interactive && "transition-colors duration-300 hover:border-white/25",
        className,
      )}
      whileHover={interactive ? cardHover : undefined}
      transition={cardTransition}
      {...props}
    >
      {children}
    </MotionArticle>
  );
}

export default Card;
