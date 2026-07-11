import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";

const technologies = ["React", "Vite", "Tailwind", "Framer Motion", "Node", "Cloud"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden border-b border-white/10 pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-30 bg-void-950" />
      <motion.div
        className="absolute left-1/2 top-24 -z-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyber-400/20 blur-3xl sm:h-[42rem] sm:w-[42rem]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-x-0 top-0 -z-20 h-[70%] bg-[radial-gradient(circle_at_20%_20%,rgba(83,224,255,0.22),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(124,60,255,0.24),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_46%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div className="premium-grid pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />

      <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-400/25 bg-cyber-400/10 px-3 py-1 text-xs font-semibold text-cyber-400 backdrop-blur-xl">
              <Sparkles className="size-3.5" aria-hidden="true" />
              AI-native software studio
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="mt-6 max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-normal text-ink-50 sm:text-7xl lg:text-8xl"
          >
            We build polished software that feels inevitable.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-pretty text-base leading-8 text-ink-300 sm:text-xl"
          >
            HexaCore partners with ambitious teams to design, engineer, and ship premium digital products with the speed of a startup and the craft of a world-class product studio.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#contact" variant="accent" size="lg" iconRight={ArrowRight}>
              Start a Project
            </Button>
            <Button as="a" href="#portfolio" variant="secondary" size="lg">
              View Work
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              Trusted technologies
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-ink-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={visualVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto aspect-square w-full max-w-[34rem] lg:max-w-none"
          aria-hidden="true"
        >
          <div className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.04] shadow-violet backdrop-blur-2xl" />
          <motion.div
            className="absolute inset-16 rounded-[2rem] border border-cyber-400/20 bg-void-900/70 shadow-glow"
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[18%] top-[20%] h-20 w-20 rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-xl"
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.04, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[22%] right-[14%] h-28 w-28 rounded-full border border-violet-400/25 bg-violet-400/10 blur-[1px]"
            animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full accent-gradient shadow-glow" />
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
