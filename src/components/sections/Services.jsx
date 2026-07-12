import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const services = [
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Build AI assistants, chatbots, intelligent workflows and business automation.",
    technologies: ["OpenAI", "Gemini", "Python", "Node.js"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Modern websites, dashboards and scalable web applications.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "High-performance Android and iOS applications with modern user experiences.",
    technologies: ["Flutter", "React Native", "Firebase"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "Deploy, scale and maintain secure cloud infrastructure.",
    technologies: ["AWS", "Docker", "CI/CD", "Vercel"],
  },
  {
    icon: "📊",
    title: "Enterprise Software",
    description: "Custom CRM, ERP and internal business management systems.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces focused on usability and business outcomes.",
    technologies: ["Figma", "Design System", "Prototyping"],
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
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.12,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
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

function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="services"
      className="relative isolate overflow-hidden border-b border-white/10 bg-void-950"
      aria-labelledby="services-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={shouldReduceMotion ? reducedVariants : sectionVariants}
    >
      <div
        className="pointer-events-none absolute right-[-12rem] top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-cyber-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-14rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-400/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionTitle
          eyebrow="Our Services"
          title="Software Solutions Built For Growth"
          description="From AI automation to cloud platforms, HexaCore builds premium software products that help businesses launch faster, operate smarter, and scale with confidence."
          align="center"
          className="mx-auto"
          titleClassName="lg:text-6xl"
        />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6"
          variants={shouldReduceMotion ? reducedListVariants : gridVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="h-full"
            >
              <Card
                interactive
                padding="lg"
                className="group flex h-full min-h-[25rem] flex-col"
                aria-label={service.title}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-cyber-400/15 blur-3xl" />
                  <div className="absolute -bottom-16 left-10 h-36 w-36 rounded-full bg-violet-400/12 blur-3xl" />
                </div>

                <motion.div
                  className="mb-8 grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-3xl shadow-glow"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  aria-hidden="true"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold tracking-tight text-ink-50">{service.title}</h3>
                <p className="mt-3 text-pretty text-base leading-7 text-ink-300">
                  {service.description}
                </p>

                <motion.ul
                  className="mt-8 flex flex-wrap gap-2"
                  variants={shouldReduceMotion ? reducedListVariants : chipListVariants}
                  aria-label={`${service.title} technologies`}
                >
                  {service.technologies.map((technology) => (
                    <motion.li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-ink-300 transition-all duration-300 hover:border-cyber-400/30 hover:bg-cyber-400/8 hover:text-cyber-400"
                      variants={shouldReduceMotion ? undefined : chipVariants}
                    >
                      {technology}
                    </motion.li>
                  ))}
                </motion.ul>

                <a
                  href="#contact"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-cyber-400 transition-colors duration-300 hover:text-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-400"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight
                    className="size-4 transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default Services;