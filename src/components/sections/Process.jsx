import { motion, useReducedMotion } from "framer-motion";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const processSteps = [
  {
    number: "01",
    icon: "🔍",
    title: "Discovery",
    description: "We understand your business goals, audience, and project requirements.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Strategy",
    description: "We define the roadmap, architecture, milestones, and delivery plan.",
  },
  {
    number: "03",
    icon: "🎨",
    title: "UI/UX Design",
    description: "We design intuitive, modern, and engaging user experiences.",
  },
  {
    number: "04",
    icon: "💻",
    title: "Development",
    description: "Our engineers build scalable, secure, and high-performance software.",
  },
  {
    number: "05",
    icon: "🧪",
    title: "Testing",
    description: "Rigorous quality assurance, performance optimization, and bug fixing.",
  },
  {
    number: "06",
    icon: "🚀",
    title: "Launch & Support",
    description: "Deployment, monitoring, maintenance, and long-term partnership.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.14,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const reducedListVariants = {
  hidden: {},
  visible: {},
};

function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="process"
      className="relative isolate overflow-hidden border-b border-white/10 bg-void-950"
      aria-labelledby="process-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={shouldReduceMotion ? reducedVariants : sectionVariants}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyber-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="premium-grid pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionTitle
          eyebrow="Our Process"
          title={
            <>
              How We Turn Ideas Into
              <br className="hidden sm:block" /> Successful Digital Products
            </>
          }
          description="A transparent, structured journey from first conversation to launch, built around clarity, momentum, and long-term product quality."
          align="center"
          className="mx-auto"
          titleClassName="lg:text-6xl"
        />

        <motion.ol
          className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-10"
          variants={shouldReduceMotion ? reducedListVariants : timelineVariants}
        >
          <li
            className="pointer-events-none absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cyber-400/30 to-transparent max-sm:block"
            aria-hidden="true"
          />
          <li
            className="pointer-events-none absolute left-0 right-0 top-[calc(50%-1px)] hidden h-px bg-gradient-to-r from-transparent via-cyber-400/25 to-transparent lg:block"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <motion.li
              key={step.number}
              className="relative"
              variants={shouldReduceMotion ? undefined : stepVariants}
            >
              <Card
                interactive
                padding="lg"
                className="group h-full min-h-72"
                aria-label={`${step.number}. ${step.title}`}
              >
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute -right-5 top-1/2 hidden h-px w-5 bg-cyber-400/30 lg:block"
                    aria-hidden="true"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyber-400/10 blur-3xl" />
                </div>

                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="text-5xl font-semibold leading-none text-white/10">
                    {step.number}
                  </span>
                  <motion.span
                    className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl shadow-glow"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </motion.span>
                </div>

                <h3 className="text-2xl font-semibold text-ink-50">{step.title}</h3>
                <p className="mt-4 text-pretty text-base leading-7 text-ink-300">
                  {step.description}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </motion.section>
  );
}

export default Process;
