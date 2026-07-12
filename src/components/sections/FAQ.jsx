import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Container from "../ui/Container";

const faqs = [
  {
    id: "timeline",
    question: "How long does a software project usually take?",
    answer:
      "Project timelines depend on complexity. Most MVPs take 4\u20138 weeks, while larger enterprise solutions may require additional phases.",
  },
  {
    id: "ai",
    question: "Do you build AI-powered applications?",
    answer:
      "Yes. We develop AI chatbots, workflow automation, recommendation systems, and custom AI solutions using modern AI technologies.",
  },
  {
    id: "technologies",
    question: "What technologies do you specialize in?",
    answer:
      "We build using React, Node.js, Python, Flutter, Firebase, MongoDB, PostgreSQL, AWS, Docker, and modern cloud technologies.",
  },
  {
    id: "support",
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. We offer maintenance, feature updates, performance improvements, monitoring, and long-term technical support.",
  },
  {
    id: "modernize",
    question: "Can you modernize an existing application?",
    answer:
      "Yes. We can redesign legacy systems, improve performance, migrate technologies, and add new features while minimizing downtime.",
  },
  {
    id: "get-started",
    question: "How do we get started?",
    answer:
      "Simply contact us through the website. We'll schedule a discovery call, understand your goals, and prepare a tailored development plan.",
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

const contentVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  shouldReduceMotion,
}) {
  const panelId = `faq-panel-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : itemVariants}
      className="group"
    >
      <div
        className={`relative rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-cyber-400/30 bg-white/[0.08] shadow-[0_0_30px_rgba(83,224,255,0.08)]"
            : "border-white/10 bg-white/[0.045] hover:border-white/18 hover:bg-white/[0.06]"
        }`}
      >
        {isOpen && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
            aria-hidden="true"
          >
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-cyber-400/10 via-transparent to-violet-400/5 opacity-40" />
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyber-400/8 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-violet-400/8 blur-3xl" />
          </div>
        )}

        <h3>
          <button
            id={buttonId}
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium leading-snug text-ink-50 transition-colors duration-200 hover:text-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void-950 sm:px-8 sm:py-6 sm:text-lg"
          >
            <span className="text-pretty">{faq.question}</span>
            <ChevronDown
              className={`size-5 shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isOpen ? "rotate-180 text-cyber-400" : "text-ink-500 group-hover:text-ink-300"
              }`}
              aria-hidden="true"
            />
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 sm:px-8 sm:pb-6">
                <div className="h-px w-full bg-gradient-to-r from-cyber-400/20 via-cyber-400/10 to-transparent" />
                <p className="pt-4 text-pretty text-base leading-7 text-ink-300 sm:pt-5">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function FAQ() {
  const shouldReduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState(null);

  const handleToggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <motion.section
      id="faq"
      className="relative isolate overflow-hidden border-b border-white/10 bg-void-950"
      aria-labelledby="faq-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={shouldReduceMotion ? reducedVariants : sectionVariants}
    >
      <div
        className="pointer-events-none absolute right-[-14rem] top-36 -z-10 h-[36rem] w-[36rem] rounded-full bg-violet-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-cyber-400/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16 xl:gap-20">
          {/* Left column: heading + description */}
          <motion.div
            className="flex flex-col gap-4"
            variants={shouldReduceMotion ? reducedVariants : contentVariants}
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyber-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-400 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-cyber-400" />
              </span>
              FAQ
            </div>

            <h2
              id="faq-heading"
              className="text-balance font-display text-3xl font-semibold leading-tight text-ink-50 sm:text-4xl lg:text-5xl"
            >
              Frequently Asked Questions
            </h2>

            <p className="max-w-lg text-balance text-base leading-7 text-ink-300 sm:text-lg lg:mt-2">
              Everything you need to know before starting your software project with HexaCore Technologies.
            </p>

            <div className="mt-2 hidden h-px w-20 bg-gradient-to-r from-cyber-400/30 to-transparent lg:block" />
          </motion.div>

          {/* Right column: accordion */}
          <motion.div
            className="flex flex-col gap-4"
            role="list"
            aria-label="Frequently asked questions"
            variants={shouldReduceMotion ? reducedListVariants : listVariants}
          >
            {faqs.map((faq) => (
              <div key={faq.id} role="listitem">
                <AccordionItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

export default FAQ;