// animations.ts — Juris Ledger shared animation system
// Design: Counsel & Craft — premium, trustworthy, not playful
// All animations are subtle, fast, and physically intuitive
// Uses Framer Motion variants for consistency across all pages

import type { Variants, Transition } from "framer-motion";

// ── EASINGS ──────────────────────────────────────────────────
export const ease = {
  out: [0.23, 1, 0.32, 1] as [number, number, number, number],
  inOut: [0.77, 0, 0.175, 1] as [number, number, number, number],
  gentle: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

// ── BASE TRANSITIONS ─────────────────────────────────────────
export const transitions = {
  fast: { duration: 0.35, ease: ease.out } satisfies Transition,
  medium: { duration: 0.55, ease: ease.out } satisfies Transition,
  slow: { duration: 0.75, ease: ease.out } satisfies Transition,
  spring: { type: "spring", stiffness: 260, damping: 28 } satisfies Transition,
};

// ── VIEWPORT CONFIG ──────────────────────────────────────────
export const viewport = {
  once: true,
  margin: "-60px 0px",
  amount: 0.08,
};

// ── VIEWPORT CONFIG — TALL CONTAINERS ────────────────────────
// For grids/lists taller than a phone screen: a fixed fraction may never be
// reached, so trigger as soon as any part of the container is in view.
export const viewportTall = {
  once: true,
  margin: "-60px 0px",
  amount: "some" as const,
};

// ── FADE UP — primary scroll reveal ─────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.medium,
  },
};

// ── FADE IN — simple opacity reveal ─────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.medium,
  },
};

// ── FADE LEFT — slide in from left ──────────────────────────
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

// ── FADE RIGHT — slide in from right ────────────────────────
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

// ── SCALE UP — subtle scale reveal ──────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.medium,
  },
};

// ── STAGGER CONTAINER — wraps staggered children ─────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ── STAGGER CONTAINER FAST ───────────────────────────────────
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.02,
    },
  },
};

// ── STAGGER ITEM — child of stagger container ────────────────
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.medium,
  },
};

// ── HERO HEADLINE — word-by-word reveal ─────────────────────
export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 40, skewY: 1.5 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease: ease.out },
  },
};

// ── HERO SUBTEXT ─────────────────────────────────────────────
export const heroSubtext: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: ease.out, delay: 0.25 },
  },
};

// ── HERO BUTTONS ─────────────────────────────────────────────
export const heroButtons: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: ease.out, delay: 0.45 },
  },
};

// ── HERO TRUST STRIP ─────────────────────────────────────────
export const heroTrust: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease.out, delay: 0.65 },
  },
};

// ── LINE REVEAL — eyebrow / thin rule ───────────────────────
export const lineReveal: Variants = {
  hidden: { opacity: 0, scaleX: 0, originX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: ease.out },
  },
};

// ── SECTION LABEL ────────────────────────────────────────────
export const sectionLabel: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: ease.out },
  },
};

// ── CARD HOVER — for service cards, review cards ─────────────
// Used inline as whileHover prop values
export const cardHover = {
  y: -4,
  transition: { duration: 0.22, ease: ease.out },
};

// ── IMAGE HOVER ──────────────────────────────────────────────
export const imageHover = {
  scale: 1.03,
  transition: { duration: 0.55, ease: ease.out },
};

// ── BUTTON PRESS ─────────────────────────────────────────────
export const buttonTap = { scale: 0.97 };
