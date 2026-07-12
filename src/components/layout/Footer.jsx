import { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import clsx from "clsx";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-400";

// -------------------------------------------------------------------
// Data
// -------------------------------------------------------------------

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Process", target: "process" },
  { label: "Tech Stack", target: "tech-stack" },
  { label: "FAQ", target: "faq" },
  { label: "Contact", target: "contact" },
];

const footerServices = [
  "AI Solutions",
  "Web Development",
  "Mobile Apps",
  "Cloud & DevOps",
  "Enterprise Software",
  "UI/UX Design",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "response.hexacore@gmail.com",
    href: "mailto:response.hexacore@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
  },
  {
    icon: Clock,
    label: "Days",
    value: "Monday – Saturday",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "9 AM – 7 PM IST",
  },
];

const socials = [
  { label: "LinkedIn", icon: LinkedInIcon, href: "#" },
  { label: "GitHub", icon: GitHubIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "X (Twitter)", icon: XIcon, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:response.hexacore@gmail.com" },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

// -------------------------------------------------------------------
// Animation variants
// -------------------------------------------------------------------

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const bottomVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

const reducedVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const reducedListVariants = {
  hidden: {},
  visible: {},
};

// -------------------------------------------------------------------
// Inline SVG Icons (brand icons not in lucide-react v1.24)
// -------------------------------------------------------------------

function LinkedInIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// -------------------------------------------------------------------
// Sub-components
// -------------------------------------------------------------------

function MapPin({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Clock({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function scrollToSection(id, shouldReduceMotion) {
  const target = document.getElementById(id);

  if (!target) return;

  target.scrollIntoView({
    behavior: shouldReduceMotion ? "auto" : "smooth",
    block: "start",
  });
  window.history.replaceState(null, "", `#${id}`);
}

function FooterLink({ label, target, shouldReduceMotion }) {
  const handleClick = useCallback(() => {
    scrollToSection(target, shouldReduceMotion);
  }, [target, shouldReduceMotion]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        "inline-block w-fit text-sm text-ink-300 transition-colors duration-200 hover:text-cyber-400 hover:translate-x-0.5",
        focusRing,
      )}
      aria-label={`Scroll to ${label} section`}
    >
      {label}
    </button>
  );
}

function SocialIcon({ icon: Icon, label, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-ink-300 shadow-soft backdrop-blur-sm transition-colors duration-300 hover:border-cyber-400/40 hover:bg-cyber-400/10 hover:text-cyber-400",
        focusRing,
      )}
      whileHover={{ y: -4, boxShadow: "0 0 24px rgba(83, 224, 255, 0.25)" }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
      aria-label={label}
    >
      <Icon className="size-4" aria-hidden="true" />
    </motion.a>
  );
}

// -------------------------------------------------------------------
// Footer
// -------------------------------------------------------------------

function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="relative isolate overflow-hidden border-t border-white/10 bg-void-950"
      aria-label="Site footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={shouldReduceMotion ? reducedVariants : sectionVariants}
    >
      {/* Background */}
      <div className="premium-grid pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      {/* Top soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[20rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyber-400/8 blur-3xl"
        aria-hidden="true"
      />

      {/* Bottom soft glow */}
      <div
        className="pointer-events-none absolute -bottom-24 left-0 -z-10 h-[16rem] w-[30rem] rounded-full bg-violet-400/8 blur-3xl"
        aria-hidden="true"
      />

      {/* ---- Main content ---- */}
      <div className="px-container mx-auto max-w-[var(--container-max)] pt-20 sm:pt-24 lg:pt-32">
        <motion.div
          variants={shouldReduceMotion ? reducedListVariants : gridVariants}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16"
        >
          {/* ---- Column 1 – Brand ---- */}
          <motion.div
            variants={shouldReduceMotion ? undefined : columnVariants}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            {/* Logo */}
            <span className="inline-flex items-center gap-3 text-left">
              <span className="relative grid size-9 shrink-0 place-items-center rounded-full border border-cyber-400/25 bg-white/[0.06] shadow-glow">
                <span className="absolute size-4 rotate-45 rounded-sm border border-cyber-400/70" />
                <span className="size-2 rounded-full accent-gradient" />
              </span>
              <span className="text-base font-semibold tracking-normal text-ink-50">
                Hexa<span className="bg-gradient-to-r from-cyber-400 to-violet-400 bg-clip-text text-transparent">Core</span>
              </span>
            </span>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              Engineering Digital Growth.
            </p>

            <p className="mt-6 max-w-xs text-pretty text-sm leading-6 text-ink-300">
              We build AI-powered software, scalable web applications and modern digital solutions for ambitious businesses.
            </p>
          </motion.div>

          {/* ---- Column 2 – Quick Links ---- */}
          <motion.div
            variants={shouldReduceMotion ? undefined : columnVariants}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-50">
              Quick Links
            </h3>
            <nav aria-label="Footer quick links" className="mt-6 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <FooterLink
                  key={link.target}
                  label={link.label}
                  target={link.target}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </nav>
          </motion.div>

          {/* ---- Column 3 – Services ---- */}
          <motion.div
            variants={shouldReduceMotion ? undefined : columnVariants}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-50">
              Services
            </h3>
            <ul className="mt-6 flex flex-col gap-3" aria-label="Our services">
              {footerServices.map((service) => (
                <li key={service}>
                  <span className="text-sm text-ink-300 transition-colors duration-200 hover:text-ink-100">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---- Column 4 – Contact ---- */}
          <motion.div
            variants={shouldReduceMotion ? undefined : columnVariants}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-50">
              Contact
            </h3>
            <ul className="mt-6 flex flex-col gap-4" aria-label="Contact information">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                if (item.href) {
                  return (
                    <li key={item.label} className="flex items-center gap-3">
                      <Icon className="size-4 shrink-0 text-cyber-400" aria-hidden="true" />
                      <a
                        href={item.href}
                        className={clsx(
                          "text-sm text-ink-300 transition-colors duration-200 hover:text-cyber-400",
                          focusRing,
                        )}
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {item.value}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="flex items-center gap-3">
                    <Icon className="size-4 shrink-0 text-cyber-400" aria-hidden="true" />
                    <span className="text-sm text-ink-300">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        {/* ---- Gradient Divider ---- */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-cyber-400/30 to-transparent" aria-hidden="true" />

        {/* ---- Social Icons ---- */}
        <motion.div
          variants={shouldReduceMotion ? reducedListVariants : socialListVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 lg:mt-14"
        >
          {socials.map((social) => (
            <motion.div
              key={social.label}
              variants={shouldReduceMotion ? undefined : socialItemVariants}
            >
              <SocialIcon icon={social.icon} label={social.label} href={social.href} />
            </motion.div>
          ))}
        </motion.div>

        {/* ---- Bottom Bar ---- */}
        <motion.div
          variants={shouldReduceMotion ? reducedVariants : bottomVariants}
          className="mt-10 border-t border-white/10 py-8 sm:mt-12 sm:py-10"
        >
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <p className="text-xs text-ink-500">
              &copy; 2026 HexaCore Technologies. All Rights Reserved.
            </p>
            <nav aria-label="Footer legal links" className="flex items-center gap-6">
              {bottomLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={clsx(
                    "text-xs text-ink-500 transition-colors duration-200 hover:text-ink-300",
                    focusRing,
                  )}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;