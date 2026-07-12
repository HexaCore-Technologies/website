import { motion } from "framer-motion";
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

const codeLineVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const statusVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cursorBlink = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const codeLines = [
  { indent: 0, color: "text-violet-400", text: "import { build, deploy } from 'hexacore';" },
  { indent: 0, color: "text-ink-100", text: "const project = {" },
  { indent: 2, color: "text-cyber-400", text: "name: 'AI Platform'," },
  { indent: 2, color: "text-gold-300", text: "stack: ['React', 'Node', 'Python']," },
  { indent: 2, color: "text-ink-100", text: "scale: 'auto'," },
  { indent: 0, color: "text-ink-100", text: "};" },
  { indent: 0, color: "text-ink-100", text: "" },
  { indent: 0, color: "text-rose-400", text: "const result = await deploy(project);" },
  { indent: 0, color: "text-lime-300", text: "// → Build successful in 2.4s" },
];

function CodeEditor() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[34rem] overflow-hidden rounded-2xl border border-white/12 bg-void-900/90 shadow-soft backdrop-blur-2xl lg:max-w-none">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-rose-400/70" />
        <span className="size-2.5 rounded-full bg-gold-300/70" />
        <span className="size-2.5 rounded-full bg-lime-300/70" />
        <span className="ml-3 text-xs font-medium text-ink-500">dashboard.tsx — HexaCore Studio</span>
      </div>

      {/* Code content */}
      <div className="p-4 sm:p-5">
        {/* Status bar */}
        <motion.div
          className="mb-4 flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2"
          variants={statusVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-lime-300" />
          </span>
          <span className="text-xs font-medium text-lime-300">System Ready</span>
          <span className="ml-auto text-[10px] text-ink-500">v3.2.1</span>
        </motion.div>

        {/* Code lines */}
        <div className="space-y-1 font-mono text-xs leading-6 sm:text-sm">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className="flex"
              custom={index}
              variants={codeLineVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="mr-3 w-6 text-right text-[10px] text-ink-700 select-none sm:w-8">
                {index + 1}
              </span>
              <span className={`${line.color} ${line.indent > 0 ? `ml-${line.indent}` : ""}`}>
                {" ".repeat(line.indent)}{line.text}
              </span>
              {index === codeLines.length - 1 && (
                <motion.span
                  className="ml-px inline-block h-4 w-2 bg-cyber-400"
                  variants={cursorBlink}
                  initial="hidden"
                  animate="visible"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-4 flex items-center gap-4 border-t border-white/8 pt-3 text-[10px] text-ink-500"
          variants={statusVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-cyber-400" />
            Lint passed
          </span>
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-violet-400" />
            Tests: 42/42
          </span>
          <span className="ml-auto">CPU: 12% · MEM: 34%</span>
        </motion.div>
      </div>

      {/* Glow overlay */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyber-400/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl" aria-hidden="true" />
    </div>
  );
}

function Hero() {
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
            className="mt-6 max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink-50 sm:text-7xl lg:text-8xl"
          >
            We build polished software that feels inevitable.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-xl sm:leading-relaxed"
          >
            HexaCore partners with ambitious teams to design, engineer, and ship premium digital products with the speed of a startup and the craft of a world-class product studio.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#contact" variant="accent" size="lg" iconRight={ArrowRight}>
              Start a Project
            </Button>
            <Button as="a" href="#process" variant="secondary" size="lg" onClick={(event) => {
              event.preventDefault();
              document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
            }}>
              View Process
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              Trusted technologies
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-ink-300 transition-colors duration-300 hover:border-cyber-400/20 hover:bg-cyber-400/5 hover:text-ink-100"
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
          className="relative"
          aria-hidden="true"
        >
          <CodeEditor />
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;