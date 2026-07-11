import { motion } from "framer-motion";
import clsx from "clsx";

const alignments = {
  left: "items-start text-left",
  center: "items-center text-center",
};

const initialState = { opacity: 0, y: 24 };
const visibleState = { opacity: 1, y: 0 };
const viewport = { once: true, margin: "-80px" };
const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}) {
  return (
    <motion.div
      className={clsx("flex max-w-3xl flex-col gap-4", alignments[align], className)}
      initial={initialState}
      whileInView={visibleState}
      viewport={viewport}
      transition={transition}
    >
      {eyebrow && (
        <p className="inline-flex rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyber-400">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-balance font-display text-3xl font-semibold leading-tight text-ink-50 sm:text-4xl lg:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-pretty max-w-2xl text-base leading-7 text-ink-300 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
