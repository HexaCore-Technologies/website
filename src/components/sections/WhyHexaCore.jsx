import { motion, useReducedMotion } from "framer-motion";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const reasons = [
  {
    icon: "🚀",
    title: "AI-Powered Development",
    description:
      "Build modern software with intelligent automation and scalable architecture designed for future growth.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "Agile development with clear milestones, transparent communication, and rapid iterations.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "Performance-first engineering using modern technologies, cloud infrastructure, and best security practices.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    description:
      "We don't just deliver projects. We help businesses continuously improve and grow.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedSectionVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const reducedGridVariants = {
  hidden: {},
  visible: {},
};

function WhyHexaCore() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="relative isolate overflow-hidden border-b border-white/10 bg-void-950"
      aria-labelledby="why-hexacore-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={shouldReduceMotion ? reducedSectionVariants : sectionVariants}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionTitle
          eyebrow="Why HexaCore"
          title="Why Businesses Choose HexaCore Technologies"
          description="Clients choose HexaCore for product thinking, disciplined engineering, and long-term ownership that turns ambitious ideas into dependable software."
          align="center"
          className="mx-auto"
          titleClassName="lg:text-6xl"
        />

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-5"
          variants={shouldReduceMotion ? reducedGridVariants : gridVariants}
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={shouldReduceMotion ? undefined : cardVariants}>
              <Card
                interactive
                padding="lg"
                className="group h-full min-h-72 overflow-hidden"
                aria-label={reason.title}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyber-400/10 blur-3xl" />
                </div>

                <motion.div
                  className="mb-8 grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl shadow-glow"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  aria-hidden="true"
                >
                  {reason.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold text-ink-50">{reason.title}</h3>
                <p className="mt-4 text-pretty text-base leading-7 text-ink-300">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default WhyHexaCore;
