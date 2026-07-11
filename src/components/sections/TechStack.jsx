import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Cloud, Code2, Database, Server, Wrench } from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const techCategories = [
  {
    title: "Frontend",
    description: "Fast, responsive interfaces built with modern component architecture.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    icon: Code2,
  },
  {
    title: "Backend",
    description: "Reliable APIs, services, and server-side systems for business logic.",
    technologies: ["Node.js", "Express", "Python"],
    icon: Server,
  },
  {
    title: "Database",
    description: "Structured, flexible data layers designed for scale and integrity.",
    technologies: ["MongoDB", "PostgreSQL", "Firebase"],
    icon: Database,
  },
  {
    title: "Cloud",
    description: "Deployment infrastructure that supports secure, resilient growth.",
    technologies: ["AWS", "Docker", "Vercel"],
    icon: Cloud,
  },
  {
    title: "AI",
    description: "Intelligent product features powered by modern AI platforms.",
    technologies: ["OpenAI", "Gemini", "LangChain"],
    icon: BrainCircuit,
  },
  {
    title: "Tools",
    description: "Collaborative workflows for design, source control, and delivery.",
    technologies: ["Git", "GitHub", "Figma"],
    icon: Wrench,
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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

function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="technology"
      className="relative isolate overflow-hidden border-b border-white/10 bg-void-950"
      aria-labelledby="technology-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={shouldReduceMotion ? reducedVariants : sectionVariants}
    >
      <div
        className="pointer-events-none absolute left-[-12rem] top-20 -z-10 h-[34rem] w-[34rem] rounded-full bg-violet-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[-12rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-cyber-400/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionTitle
          eyebrow="Our Technology"
          title="Powered by Modern Technologies"
          description="We use industry-leading technologies to build secure, scalable and high-performance digital products."
          align="center"
          className="mx-auto"
          titleClassName="lg:text-6xl"
        />

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5"
          variants={shouldReduceMotion ? reducedListVariants : gridVariants}
        >
          {techCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={shouldReduceMotion ? undefined : cardVariants}
                className="h-full"
              >
                <Card
                  interactive
                  padding="lg"
                  className="group flex h-full min-h-72 flex-col"
                  aria-label={`${category.title} technology stack`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyber-400/10 blur-3xl" />
                  </div>

                  <motion.div
                    className="mb-7 grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyber-400 shadow-glow"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    aria-hidden="true"
                  >
                    <Icon className="size-6" />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-ink-50">{category.title}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-ink-300">
                    {category.description}
                  </p>

                  <ul
                    className="mt-7 flex flex-wrap gap-2"
                    aria-label={`${category.title} technologies`}
                  >
                    {category.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-ink-300 transition-colors duration-300 group-hover:border-cyber-400/20 group-hover:text-ink-100"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default TechStack;
