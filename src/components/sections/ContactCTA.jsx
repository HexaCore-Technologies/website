import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const contactVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

const reducedVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const mailToLink =
  "mailto:response.hexacore@gmail.com" +
  "?subject=Project%20Inquiry%20-%20HexaCore%20Technologies" +
  "&body=Hello%20HexaCore%20Technologies%2C%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20software%20project.%0D%0A%0D%0AProject%20Type%3A%0D%0ABudget%3A%0D%0ATimeline%3A%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0AThanks%2C";

function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="relative isolate overflow-hidden border-b border-white/10 bg-void-950"
      aria-labelledby="cta-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={shouldReduceMotion ? reducedVariants : sectionVariants}
    >
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div className="premium-grid pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      {/* Radial glow - top left */}
      <motion.div
        className="pointer-events-none absolute -left-48 -top-48 -z-10 h-[40rem] w-[40rem] rounded-full bg-cyber-400/15 blur-3xl"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Radial glow - bottom right */}
      <motion.div
        className="pointer-events-none absolute -bottom-48 -right-48 -z-10 h-[40rem] w-[40rem] rounded-full bg-violet-400/15 blur-3xl"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Center subtle glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-400/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="py-20 sm:py-24 lg:py-32">
        <motion.div
          variants={shouldReduceMotion ? reducedVariants : cardVariants}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] shadow-soft backdrop-blur-2xl"
        >
          {/* Card inner glow */}
          <div
            className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-30"
            aria-hidden="true"
          >
            <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-cyber-400/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
          </div>

          <motion.div
            className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
            variants={shouldReduceMotion ? reducedVariants : contentVariants}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyber-400/25 bg-cyber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyber-400 backdrop-blur-xl">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-400 opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-cyber-400" />
                </span>
                Let's Build Together
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="cta-heading"
              variants={itemVariants}
              className="mt-6 text-balance text-center font-display text-3xl font-semibold leading-tight text-ink-50 sm:text-4xl lg:text-5xl"
            >
              Ready to Build Something{" "}
              <span className="text-gradient">Exceptional</span>?
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-2xl text-balance text-center text-base leading-7 text-ink-300 sm:text-lg"
            >
              Whether you're launching a startup, modernizing your business, or building an AI-powered platform, HexaCore Technologies is ready to help transform your ideas into scalable digital products.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <Button
                as="a"
                href={mailToLink}
                variant="accent"
                size="lg"
                iconRight={ArrowRight}
              >
                Book a Free Consultation
              </Button>
              <Button
                as="a"
                href={mailToLink}
                variant="secondary"
                size="lg"
                iconLeft={Mail}
              >
                Email Us
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={shouldReduceMotion ? reducedVariants : contactVariants}
              className="mt-14 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-8 sm:pt-12"
            >
              {/* Email */}
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  Email
                </p>
                <a
                  href={mailToLink}
                  className="mt-2 block text-sm font-medium text-ink-100 transition-colors duration-200 hover:text-cyber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void-950"
                  aria-label="Email HexaCore Technologies at response.hexacore@gmail.com"
                >
                  response.hexacore@gmail.com
                </a>
              </div>

              {/* Response Time */}
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  Response Time
                </p>
                <p className="mt-2 text-sm font-medium text-ink-100">
                  Usually within 24 hours
                </p>
              </div>

              {/* Availability */}
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  Availability
                </p>
                <p className="mt-2 text-sm font-medium text-ink-100">
                  Monday &ndash; Saturday
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default ContactCTA;